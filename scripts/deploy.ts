import { parseUnits } from "ethers/lib/utils";
import { ethers } from "hardhat";

async function main() {
  // const rewardToken = "0x412A1ab6A00B50A7ad2306C994ae609Bd823ad87"; // The current "ARTK"(Or whatever its called then)

  // const AccessControlCurve = await ethers.getContractFactory("AccessControlCurve");
  // const rate = parseUnits("1", 17);
  // console.log("rate: " + rate.toString());
  // const emissionsCurve = await AccessControlCurve.deploy(rate);
  // await emissionsCurve.deployed();

  // console.log(`AccessControlCurve deployed to: ${emissionsCurve.address}`);

  // const ReliquaryGamified = await ethers.getContractFactory("ReliquaryGamified");
  // const reliq = await ReliquaryGamified.deploy(
  //   rewardToken,
  //   emissionsCurve.address,
  //   "Reliquary",
  //   "RELIQ"
  // );
  // await reliq.deployed();

  // console.log(`ReliquaryGamified deployed to: ${reliq.address}`);

  const NftDescriptor = await ethers.getContractFactory("NftDescriptorMock");
  const tokenURI = "";
  const descriptor = await NftDescriptor.deploy(
    "0xb617d3584cbE69f04c2dEA54dF0d48876b793699",
    tokenURI
  );
  await descriptor.deployed();

  console.log(`NftDescriptor deployed to: ${descriptor.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
