// scripts/index.js
module.exports = async function main(callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    const actor = accounts[0]
    const KSNToken = artifacts.require('KSNToken');
    const ksnToken = await KSNToken.deployed();

    const TestTransferV2 = artifacts.require('TestTransferV2');
    const testTransferV2 = await TestTransferV2.deployed();

    // await ksnToken.approve(testTransferV2.address, 100000, {from: actor});

    // await testTransferV2.transferFromContract(100000)

    await testTransferV2.transferFromContract(100000)

    const balanceOfContract = await ksnToken.balanceOf(testTransferV2.address)
    console.log("balanceOfContract", balanceOfContract.toString())

    const balanceOfPlayer = await ksnToken.balanceOf(actor)
    console.log("balanceOfPlayer", balanceOfPlayer.toString())
    
    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};