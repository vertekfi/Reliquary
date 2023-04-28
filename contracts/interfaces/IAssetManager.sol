// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

/**
 * @dev Placeholder. May not use this, but including as a reminder.
 * @dev Inspired by Balancer's AssetManager setup.
 * A contract given authorization to put idle liquidity to use
 * in external protocols for better capital efficiency.
 * Provides a boost on the overall return for a position (with increased risks through usage of external protocols).
 */

interface IAssetManager {
    // Reference to the Reliquary contract
    function reliquary() external view returns (address);

    // Associated Reliquary poolId for the pool
    function poolId() external view returns (uint256);

    // Associated Reliquary LP token address for the pool
    function poolAddress() external view returns (address);

    // Underlying tokens accessible by the manager
    // Typically two tokens but in the case of things like Balancer is a dynamic list.
    function assets() external view returns (address[] memory);

    // Pull funds from the associated pool
    function withdrawFunds(uint256 amount) external;

    // Add funds from back to the associated pool
    function depositFunds(uint256 amount) external;

    // Amount of funds currently being kept within this protocol (not withdraw for external uses)
    function cashBalance() external view returns (uint256);

    // Amount of funds currently being used externally
    function managedBalance() external view returns (uint256);
}
