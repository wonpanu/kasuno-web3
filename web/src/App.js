import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Components/navbar";
import Game from "./Components/game";
import Footer from "./Components/footer";
import Modal from "./Components/modal";

function App() {
  const [balance, setBalance] = useState(100);
  const [betAmount, setBetAmount] = useState(0);
  const [betType, setBetType] = useState("hi");

  const onChangeBetAmount = (e) => {
    if (e.target.value <= balance) {
      setBetAmount(e.target.value);
    }
  };

  const onClickBet = () => {
    if (betAmount <= balance) {
      setBalance(balance - betAmount);
      document.querySelector("#dice-wrapper button").click();
    }
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>KASUNO | Hi Lo</title>
        <link rel="canonical" href="http://kasuno.com/hi-lo" />
      </Helmet>
      <Navbar balance={100} />
      <Game
        betType={betType}
        setBetType={setBetType}
        onChangeBetAmount={onChangeBetAmount}
        onClickBet={onClickBet}
      />
      <Footer />
      {/* for message after click bet (win/lose) */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;
