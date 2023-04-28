// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "../interfaces/IEmissionCurve.sol";

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract EmissionCurveMock is Initializable, IEmissionCurve {
    uint256 private _rate;

    function initialize(uint256 rate) public initializer {
        _setRate(rate > 0 ? rate : 6e18);
    }

    function getRate(uint lastRewardTime) external view returns (uint256) {
        return lastRewardTime * _rate;
    }

    function setRate(uint256 rate) external {
        _setRate(rate);
    }

    function _setRate(uint256 rate) internal {
        require(rate <= 6e18, "Rate too high");
        _rate = rate;
    }
}
