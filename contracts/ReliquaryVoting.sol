// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts-upgradeable/access/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

import "./interfaces/IReliquary.sol";

contract ReliquaryVoting is AccessControlEnumerableUpgradeable, ReentrancyGuardUpgradeable {
    IReliquary public reliquary;

    // start time => total vote weight given
    mapping(uint256 => uint256) private _votingRounds;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(IReliquary _reliquary) public initializer {
        __AccessControlEnumerable_init();
        __ReentrancyGuard_init();

        reliquary = _reliquary;
    }

    function getPositionVotingPower(uint256 relicId) public view returns (uint256) {
        // votingPower = levelMultiplier of position / max level multiplier for pool * positions amount staked
        // In other words, if the nft has reached max voting level the voting power is equal to the amount deposited.
        PositionInfo memory position = reliquary.getPositionForId(relicId);
        // will need the level/maturity info of main pool

        return 0;
    }

    function vote() external nonReentrant {
        // make sure relicId has not already voted this round/epoch
        // we want the position(s) of the caller here
    }
}
