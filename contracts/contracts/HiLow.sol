// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./KSNToken.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract HiLow is Ownable {
    KSNToken public token;
    event Dice(bool isPlayerWin, uint256 winAmount);

    event RugAmount(uint256 value);

    constructor(address tokenAddr) public {
        token = KSNToken(tokenAddr);
    }

    function dice(uint256 bet, uint256 betSize)
        public
        returns (bool isPlayerWin)
    {
        uint256 randomNumber = random(6);
        uint256 hiLowResult = hiLowCalculate(randomNumber);
        bool isPlayerWin = isWin(hiLowResult, bet);

        if (isPlayerWin) {
            token.transfer(msg.sender, betSize);
        } else {
            token.transferFrom(msg.sender, address(this), betSize);
        }

        emit Dice(isPlayerWin, betSize);

        return isPlayerWin;
    }

    function isWin(uint256 hiLowResult, uint256 bet)
        public
        view
        returns (bool)
    {
        if (bet == hiLowResult) {
            return true;
        }
        return false;
    }

    function hiLowCalculate(uint256 number) public view returns (uint256) {
        if (number >= 4) {
            return 1;
        }
        return 0;
    }

    function random(uint256 modulus) public view returns (uint256) {
        uint256 randomHash = uint256(
            keccak256(abi.encodePacked(block.difficulty, block.timestamp))
        );
        return (randomHash % modulus) + 1;
    }

    function rug(uint256 amount) public onlyOwner {
        token.transfer(msg.sender, amount);
        emit RugAmount(amount);
    }
}
