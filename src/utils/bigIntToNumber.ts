import { ethers, BigNumberish } from "ethers";

export const bigNumberishToNumber = (balance: BigNumberish) =>
  ethers.utils.formatEther(balance);
