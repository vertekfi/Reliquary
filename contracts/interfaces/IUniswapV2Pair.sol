// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IUniswapV2Pair {
    function getReserves() external view returns (uint256, uint256, uint256);

    function totalSupply() external view returns (uint256);

    function token0() external view returns (address);

    function token1() external view returns (address);
}
