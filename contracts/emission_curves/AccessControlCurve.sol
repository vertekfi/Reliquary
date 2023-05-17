// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../interfaces/IEmissionCurve.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract AccessControlCurve is IEmissionCurve, AccessControl {
    bytes32 public constant OPERATOR = keccak256("OPERATOR");

    uint private _rewardPerSecond;

    event LogRate(uint rewardPerSecond);

    constructor(uint rate) {
        _setRate(rate);
    }

    function setRate(uint rate) external onlyRole(OPERATOR) {
        _setRate(rate);
    }

    function getRate(uint) external view override returns (uint) {
        return _rewardPerSecond;
    }

    function _setRate(uint rate) internal {
        _rewardPerSecond = rate;
        emit LogRate(rate);
    }
}
