import { expect } from "chai";
import * as hre from "hardhat";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Wallet, Provider, Contract } from "zksync-web3";
import * as emissionsABI from "../artifacts-zk/contracts/test/EmissionCurveMock.sol/EmissionCurveMock.json";
import * as rewardTokenABI from "../artifacts-zk/contracts/test/ERC20Mock.sol/ERC20Mock.json";
import * as reliquaryABI from "../artifacts-zk/contracts/Reliquary.sol/Reliquary.json";

const RICH_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";

const REWARD_TOKEN = "0xcFDE18a0f130bBAfe0037072407F83899D49414f";
const EMISSIONS = "0x3ccA24e1A0e49654bc3482ab70199b7400eb7A3a";
const RELIQUARY = "0xfC3c03385dA8D5Adfb8BDF5f5fe156fb5B3a6Ee2";

describe("Reliquary zkSync", () => {
  let rewardToken: Contract;
  let emissionCurve: Contract;
  let reliquary: Contract;

  beforeEach(async () => {
    const wallet = new Wallet(RICH_WALLET_PK);
    // const deployer = new Deployer(hre, wallet);

    rewardToken = new Contract(REWARD_TOKEN, rewardTokenABI.abi, wallet);
    emissionCurve = new Contract(EMISSIONS, emissionsABI.abi, wallet);
    reliquary = new Contract(RELIQUARY, reliquaryABI.abi, wallet);

    // const ERC20MockArtifact = await deployer.loadArtifact("ERC20Mock");
    // rewardToken = await deployer.deploy(ERC20MockArtifact, []);
    // await rewardToken.deployed();

    // console.log(`ERC20MockArtifact deployed to: ${rewardToken.address}`);

    // const EmissionCurveMock = await deployer.loadArtifact("EmissionCurveMock");
    // emissionCurve = await deployer.deploy(EmissionCurveMock, []);
    // await emissionCurve.deployed();

    // console.log(`EmissionCurveMock deployed to: ${emissionCurve.address}`);

    // const Reliquary = await deployer.loadArtifact("Reliquary");
    // reliquary = await deployer.deploy(Reliquary, [
    //   rewardToken.address,
    //   emissionCurve.address,
    //   "Reliquary",
    //   "RELIQ",
    // ]);
    // await reliquary.deployed();

    // console.log(`Reliquary deployed to: ${reliquary.address}`);
  });

  describe("Deployment", () => {
    it("sets the reward token", async () => {
      expect(await reliquary.rewardToken()).to.equal(rewardToken.address);
    });
  });
});
