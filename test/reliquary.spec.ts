import { expect } from "chai";
import * as hre from "hardhat";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Wallet, Provider, Contract } from "zksync-web3";

const RICH_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";

describe("Reliquary zkSync", () => {
  beforeEach(async () => {
    const wallet = new Wallet(RICH_WALLET_PK);
    const deployer = new Deployer(hre, wallet);

    const ERC20MockArtifact = await deployer.loadArtifact("ERC20Mock");
    const rewardToken = await deployer.deploy(ERC20MockArtifact, []);
    await rewardToken.deployed();

    const EmissionCurveMock = await deployer.loadArtifact("EmissionCurveMock");
    const emissionCurve = await deployer.deploy(EmissionCurveMock, []);
    await emissionCurve.deployed();

    const Reliquary = await deployer.loadArtifact("Reliquary");
    const reliquary = await deployer.deploy(Reliquary, [
      rewardToken.address,
      emissionCurve.address,
      "Reliquary",
      "RELIQ",
    ]);
    await reliquary.deployed();
  });
  it("deploy", async () => {
    expect(true).to.be.true;
  });
});
