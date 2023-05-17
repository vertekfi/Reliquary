import { ethers } from "hardhat";

async function main() {
  const rewardToken = "0x412A1ab6A00B50A7ad2306C994ae609Bd823ad87"; // The current "ARTK"(Or whatever its called then)
  const emissionsCurve = ethers.constants.AddressZero;

  // const Reliquary = await ethers.getContractFactory("Reliquary");
  // const reliq = await Reliquary.deploy(rewardToken, emissionsCurve, "Reliquary", "RELIQ");
  // await reliq.deployed();

  // console.log(`Reliquary deployed to: ${reliq.address}`);

  const ReliquaryGamified = await ethers.getContractFactory("ReliquaryGamified");
  const reliq = await ReliquaryGamified.deploy(rewardToken, emissionsCurve, "Reliquary", "RELIQ");
  await reliq.deployed();

  console.log(`ReliquaryGamified deployed to: ${reliq.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
