import * as hre from "hardhat";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Wallet, Provider, Contract } from "zksync-web3";

const RICH_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";

export async function reliquaryFixture() {
  const wallet = new Wallet(RICH_WALLET_PK);
  const deployer = new Deployer(hre, wallet);

  const ERC20MockArtifact = await deployer.loadArtifact("ERC20Mock");
  const rewardToken = await deployer.deploy(ERC20MockArtifact, []);
  await rewardToken.deployed();

  // const ERC20Mock = await hre.ethers.getContractFactory("ERC20Mock");
  // const rewardToken = await ERC20Mock.deploy();
  // await rewardToken.deployed();

  const EmissionCurveMock = await deployer.loadArtifact("EmissionCurveMock");
  const emissionCurve = await deployer.deploy(EmissionCurveMock, []);
  await emissionCurve.deployed();

  // const EmissionCurveMock = await hre.ethers.getContractFactory("EmissionCurveMock");
  // const emissionCurve = await hre.upgrades.deployProxy(EmissionCurveMock, [0]);
  // await emissionCurve.deployed();

  //   const Reliquary = await hre.ethers.getContractFactory("Reliquary");
  //   const reliquary = await hre.upgrades.deployProxy(Reliquary, [
  //     rewardToken.address,
  //     emissionCurve.address,
  //     "Reliquary",
  //     "RELIQ",
  //   ]);
  //   await reliquary.deployed();

  const Reliquary = await deployer.loadArtifact("Reliquary");
  const reliquary = await deployer.deploy(Reliquary, [
    rewardToken.address,
    emissionCurve.address,
    "Reliquary",
    "RELIQ",
  ]);
  await reliquary.deployed();

  return {
    reliquary,
    emissionCurve,
    rewardToken,
  };
}
