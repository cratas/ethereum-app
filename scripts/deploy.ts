import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.utils.parseEther("0.001");

  const Crowdfunding = await ethers.getContractFactory("CrowdFunding");
  const crowdfunding = await Crowdfunding.deploy();

  await crowdfunding.deployed();

  fs.writeFileSync("./contract.json",JSON.stringify({ address: crowdfunding.address }));

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${crowdfunding.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
