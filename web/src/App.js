import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Components/navbar";
import Game from "./Components/game";
import Footer from "./Components/footer";
import Modal from "./Components/modal";
import Web3 from "web3";
import HiLow from "./contracts/HiLow.json";
import KSNToken from "./contracts/KSNToken.json";
import BigNumber from "bignumber.js";

function App() {
  const [balance, setBalance] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  const [betType, setBetType] = useState("hi");
  const [result, setResult] = useState(1);
  const [web3, setWeb3] = useState();
  const [hiLowContract, setHiLowContract] = useState();
  const [KSNContract, setKSNContract] = useState();
  const [accounts, setAccounts] = useState([]);

  const connectWallet = async () => {
    // App.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        // User denied account access...
        console.error("User denied account access");
      }
    } else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    } else {
      App.web3Provider = new Web3.providers.HttpProvider(
        "http://localhost:7545"
      );
    }
    const web3 = new Web3(App.web3Provider);
    const accounts = await web3.eth.getAccounts();

    const networkId = await web3.eth.net.getId();
    const deployedHiLowNetwork = HiLow.networks[networkId];
    const hiLowContract = new web3.eth.Contract(
      HiLow.abi,
      deployedHiLowNetwork && deployedHiLowNetwork.address
    );

    const deployedKSNNetwork = KSNToken.networks[networkId];
    const KSNContract = new web3.eth.Contract(
      KSNToken.abi,
      deployedKSNNetwork && deployedKSNNetwork.address
    );

    setAccounts(accounts);
    setHiLowContract(hiLowContract);
    setKSNContract(KSNContract);
  };

  const onChangeBetAmount = (e) => {
    if (e.target.value <= balance) {
      setBetAmount(e.target.value);
    }
  };

  const getBalance = async (address) => {
    const balanceDecimals = await KSNContract?.methods
      .balanceOf(address)
      .call();
    const currentBalance = Math.round(balanceDecimals * 10 ** -18);
    return currentBalance;
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onClickBet = async () => {
    if (betAmount <= balance) {
      await KSNContract.methods
        .approve(
          hiLowContract.options.address,
          new BigNumber(betAmount * 10 ** 18)
        )
        .send({
          from: accounts[0],
        });
      const tx = await hiLowContract.methods
        .dice(betType === "hi" ? 1 : 0, new BigNumber(betAmount * 10 ** 18))
        .send({ from: accounts[0] });
      const currentBalance = await getBalance(accounts[0]);
      const isWin = currentBalance > balance;
      if (isWin && betType === "hi") {
        setResult(getRandomInt(3, 6));
      } else if (isWin && betType === "lo") {
        setResult(getRandomInt(1, 3));
      } else if (!isWin && betType === "hi") {
        setResult(getRandomInt(1, 3));
      } else {
        setResult(getRandomInt(3, 6));
      }

      document.querySelector("#dice-wrapper button").click();
      setBalance(currentBalance);
    }
  };

  const updateBalance = async () => {
    const currentBalance = await getBalance(accounts[0]);
    setBalance(currentBalance);
  };

  useEffect(() => {
    console.log(KSNContract);
    console.log(accounts);
    if (KSNContract && accounts.length > 0) {
      console.log("update balance");
      updateBalance();
      console.log("update balance");
    }
  }, [accounts, KSNContract]);

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>KASUNO | Hi Lo</title>
        <link rel="canonical" href="http://kasuno.com/hi-lo" />
      </Helmet>
      <Navbar
        balance={balance}
        onConnectWallet={connectWallet}
        isConnected={accounts.length > 0}
      />
      <Game
        result={result}
        betType={betType}
        setBetType={setBetType}
        onChangeBetAmount={onChangeBetAmount}
        onClickBet={() => onClickBet()}
      />
      <Footer />
      {/* message after click bet (win/lose) */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;
