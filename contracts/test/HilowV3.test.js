const { expect } = require('chai');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const KSNToken = artifacts.require('KSNToken')
const HiLowV3 = artifacts.require('HiLowV3');

// Start test block
contract('HiLowV3', function ([ owner, other ]) {
  beforeEach(async function () {
    this.ksnToken = await KSNToken.new();
    this.hiLowV3 = await HiLowV3.new(this.ksnToken.address);
    await this.ksnToken.transfer(this.hiLowV3.address, 1000000, { from: owner })
  });

  // Test case
  it('retrieve returns a value previously stored', async function () {
    const randResult = await this.hiLowV3.random.call(6);
    const expectedResult = [1, 2, 3, 4, 5, 6];
    console.log(randResult.toString());
    expect(+randResult.toString()).to.be.oneOf(expectedResult);
  });

  it('Rug by owner', async function () {
    const value = new BN('10000');
    const tx = await this.hiLowV3.rug(value, { from: owner } )
    expectEvent(tx, 'RugAmount', { value: value });
  });

  it('Rug by other', async function () {
    const value = new BN('10000');
    expectRevert(this.hiLowV3.rug(value, { from: other } ), 'Ownable: caller is not the owner');
  });
});