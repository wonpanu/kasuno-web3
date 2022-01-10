// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./KSNToken.sol";
contract TestTransferV2 {
  KSNToken public token;
  constructor(address tokenAddr) public {
    token = KSNToken(tokenAddr);
  }

  function transferFromContract(uint amount) public {
    // token.allowance(msg.sender, address(this));
    token.transfer(msg.sender, amount);
  }

  function transferToContract(uint amount) public {
    token.transferFrom(msg.sender, address(this), amount);
  }

  // function dice(uint8 bet, uint256 betSize) public returns (bool isPlayerWin, uint256 winAmount) {
  //   uint256 randomResult = random(6);
  //   uint8 normalize;
  //   if (randomResult > 3) {
  //     normalize = 1; // Hi
  //   } else {
  //     normalize = 0; // Low
  //   }
  //   if (bet == normalize) {
  //     winAmount = betSize;
  //     isPlayerWin = true;
  //   } else {
  //     winAmount = 0;
  //     isPlayerWin = false;
  //   }

  //   if (isPlayerWin) {
  //     token.transfer(msg.sender, winAmount);
  //   } else {
  //     token.transferFrom(msg.sender, address(this), betSize);
  //   }
  //   return (isPlayerWin, winAmount);
  // }

  // function random(uint256 modulus) private view returns (uint) { // 0 - (mod -1)
  //   uint randomHash = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
  //   return randomHash % modulus;
  // } 

}
