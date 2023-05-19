import { ethers } from "hardhat";
import { parseUnits } from "ethers/lib/utils";

export async function reliquaryFixture() {
  const rewardToken = "0x412A1ab6A00B50A7ad2306C994ae609Bd823ad87"; // The current "ARTK"(Or whatever its called then)
  const reliquary = "0xb617d3584cbE69f04c2dEA54dF0d48876b793699";

  const AccessControlCurve = await ethers.getContractFactory("AccessControlCurve");
  const rate = parseUnits("1", 17);
  console.log("rate: " + rate.toString());
  const emissionsCurve = await AccessControlCurve.deploy(rate);
  await emissionsCurve.deployed();

  console.log(`AccessControlCurve deployed to: ${emissionsCurve.address}`);

  const ReliquaryGamified = await ethers.getContractFactory("ReliquaryGamified");
  const reliq = await ReliquaryGamified.deploy(
    rewardToken,
    emissionsCurve.address,
    "Reliquary",
    "RELIQ"
  );
  await reliq.deployed();

  console.log(`ReliquaryGamified deployed to: ${reliq.address}`);

  const NftDescriptor = await ethers.getContractFactory("NftDescriptorMock");
  const tokenURI = "";
  const descriptor = await NftDescriptor.deploy(reliquary, tokenURI);
  await descriptor.deployed();
  console.log(`NftDescriptor deployed to: ${descriptor.address}`);

  const ParentRewarder = await ethers.getContractFactory("ParentRewarder");
  const rewarder = await ParentRewarder.deploy(parseUnits("1"), rewardToken, reliquary);
  await rewarder.deployed();
  console.log(`ParentRewarder deployed to: ${rewarder.address}`);

  return {
    reliquary,
    emissionsCurve,
    rewardToken,
    rewarder,
  };
}
