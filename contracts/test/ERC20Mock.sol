// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Mock is ERC20("ERC20Mock", "ERC20Mock") {
    constructor() {
        _mint(msg.sender, 10000 ether);
    }

    function mint(address to, uint amount) external {
        _mint(to, amount);
    }
}
