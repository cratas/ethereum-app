import { ethers, BigNumberish } from "ethers";

export const bigNumberishToNumber = (balance: BigNumberish): number =>
  Number(ethers.utils.formatEther(balance));
