// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts-upgradeable/access/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

import "./interfaces/IReliquary.sol";

contract ReliquaryVoting is AccessControlEnumerableUpgradeable, ReentrancyGuardUpgradeable {
    uint256 public votingPoolId;

    IReliquary private _reliquary;

    // start time => total vote weight given
    mapping(uint256 => uint256) private _votingRounds;

    // position => round => vote amount
    mapping(uint256 => mapping(uint256 => uint256)) private _positionVotes;

    // TODO: Users should? be able to vote for more than one

    // position => round => power used
    // mapping(uint256 => mapping(uint256 => uint256)) private _positionVotes;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(IReliquary reliquary, uint256 poolId) public initializer {
        __AccessControlEnumerable_init();
        __ReentrancyGuard_init();

        _reliquary = reliquary;
        votingPoolId = poolId;
    }

    function vote() external nonReentrant {
        // make sure relicId has not already voted this round/epoch
        // we want the position(s) of the caller here
    }

    // ================================= VIEW ==================================== //

    function getPositionVotingPower(address account) public view returns (uint256 votingPower) {
        // votingPower(using multipliers) = levelMultiplier / max level multiplier * positions amount staked
        // votingPower(using levels) = amount * level / maxLevel

        // In other words, if the nft has reached max voting level the voting power is equal to the amount deposited.

        LevelInfo memory levelInfo = _reliquary.getLevelInfo(votingPoolId);
        uint256 maxMultiplier = levelInfo.multipliers[levelInfo.multipliers.length - 1];

        (uint256[] memory relicIds, PositionInfo[] memory positions) = _reliquary
            .relicPositionsOfOwner(account);

        // For readability with the nested array indexing
        PositionInfo memory currentPosition;
        uint256 currentLevelMultiplier;
        uint256 positionMultiplier;

        // user vote power is summed up by all relic positions
        for (uint256 i = 0; i < relicIds.length; ) {
            currentPosition = positions[i];
            currentLevelMultiplier = levelInfo.multipliers[currentPosition.level];

            votingPower += currentPosition.amount * (currentLevelMultiplier / maxMultiplier);

            unchecked {
                ++i;
            }
        }
    }

    function getReliquary() external view returns (IReliquary) {
        return _reliquary;
    }
}
