// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./KSNToken.sol";
contract HiLowV2 {
  KSNToken public token;
  constructor(address tokenAddr) public {
    token = KSNToken(tokenAddr);
  }

  function dice(uint8 bet, uint256 betSize) public returns (bool isPlayerWin) {
    uint256 randomResult = random(6);
    uint8 normalize;
    uint256 winAmount;
    if (randomResult > 3) {
      normalize = 1; // Hi
    } else {
      normalize = 0; // Low
    }
    if (bet == normalize) {
      winAmount = betSize;
      isPlayerWin = true;
    } else {
      winAmount = 0;
      isPlayerWin = false;
    }

    if (isPlayerWin) {
      token.transfer(msg.sender, winAmount);
    } else {
      token.transferFrom(msg.sender, address(this), betSize);
    }

    return isPlayerWin;
  }

  function random(uint256 modulus) private view returns (uint) { // 0 - (mod -1)
    uint randomHash = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    return randomHash % modulus;
  } 

}
