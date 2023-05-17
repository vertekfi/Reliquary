import { parseUnits } from "ethers/lib/utils";
import { ethers } from "hardhat";

async function main() {
  const rewardToken = "0x412A1ab6A00B50A7ad2306C994ae609Bd823ad87"; // The current "ARTK"(Or whatever its called then)

  const OwnableCurve = await ethers.getContractFactory("OwnableCurve");
  const rate = parseUnits("1", 17);
  console.log("rate: " + rate.toString());
  const emissionsCurve = await OwnableCurve.deploy(rate);
  await emissionsCurve.deployed();

  console.log(`OwnableCurve deployed to: ${emissionsCurve.address}`);

  const ReliquaryGamified = await ethers.getContractFactory("ReliquaryGamified");
  const reliq = await ReliquaryGamified.deploy(
    rewardToken,
    emissionsCurve.address,
    "Reliquary",
    "RELIQ"
  );
  await reliq.deployed();

  console.log(`ReliquaryGamified deployed to: ${reliq.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
