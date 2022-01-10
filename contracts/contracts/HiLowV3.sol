// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./KSNToken.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract HiLowV3 is Ownable {
  KSNToken public token;
  event Dice(bool isPlayerWin, uint winAmount);

  event RugAmount(uint256 value);
  constructor(address tokenAddr) public {
    token = KSNToken(tokenAddr);
  }

  function dice(uint bet, uint256 betSize) public returns (bool isPlayerWin) {
    uint randomNumber = random(6);
    uint hiLowResult = hiLowCalculate(randomNumber);
    bool isPlayerWin = isWin(hiLowResult, bet);

    if (isPlayerWin) {
      token.transfer(msg.sender, betSize);
    } else {
      token.transferFrom(msg.sender, address(this), betSize);
    }

    emit Dice(isPlayerWin, betSize);

    return isPlayerWin;
  }

  function isWin(uint hiLowResult, uint bet) public view returns (bool) {
    if (bet == hiLowResult) {
      return true;
    }
    return false;
  }

  function hiLowCalculate(uint number) public view returns (uint) {
    if (number >= 4) {
      return 1;
    }
    return 0;
  }

  function random(uint256 modulus) public view returns (uint) {
    uint randomHash = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    return (randomHash % modulus) + 1;
  } 

  function rug(uint amount) public onlyOwner {
    token.transfer(msg.sender, amount);
    emit RugAmount(amount);
  }
}
