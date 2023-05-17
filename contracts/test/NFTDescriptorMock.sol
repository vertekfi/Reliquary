// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "../interfaces/INFTDescriptor.sol";
import "../interfaces/IReliquary.sol";

contract NftDescriptorMock is INFTDescriptor, AccessControl {
    using Strings for uint;

    bytes32 public constant OPERATOR = keccak256("OPERATOR");

    IReliquary public immutable reliquary;
    string public IPFS;

    constructor(IReliquary _reliquary, string memory _ipfs) {
        reliquary = _reliquary;
        IPFS = _ipfs;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(OPERATOR, msg.sender);
    }

    /// @notice Generate tokenURI as a base64 encoding from live on-chain values
    function constructTokenURI(uint relicId) external view override returns (string memory uri) {
        PositionInfo memory position = reliquary.getPositionForId(relicId);
        uri = string.concat(IPFS, "/", position.level.toString(), ".png");
    }

    function setURI(string calldata _ipfs) external onlyRole(OPERATOR) {
        IPFS = _ipfs;
    }
}
