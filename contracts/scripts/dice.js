// scripts/index.js
module.exports = async function main(callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    const actor = accounts[0]
    const KSNToken = artifacts.require('KSNToken');
    const ksnToken = await KSNToken.deployed();

    const HiLow = artifacts.require('HiLowV3');
    const hiLow = await HiLow.deployed();

    const balanceOfContractBefore = await ksnToken.balanceOf(hiLow.address)
    console.log("Before balanceOfContract", balanceOfContractBefore.toString())

    const balanceOfPlayerBefore = await ksnToken.balanceOf(actor)
    console.log("Before balanceOfPlayer", balanceOfPlayerBefore.toString())

    await ksnToken.approve(hiLow.address, 5, {from: actor});
    const result = await hiLow.dice(1, 5);
    console.log("result", JSON.stringify(result, null, 2))
    // console.log("isPlayerWin", result.isPlayerWin.toString())
    // console.log(result.winAmount.toString());

    const balanceOfContract = await ksnToken.balanceOf(hiLow.address)
    console.log("After balanceOfContract", balanceOfContract.toString())

    const balanceOfPlayer = await ksnToken.balanceOf(actor)
    console.log("After balanceOfPlayer", balanceOfPlayer.toString())


    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};