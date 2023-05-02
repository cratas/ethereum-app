import { ethers } from "ethers"

export const numberToBigInt = (value: number | string) => {
    return ethers.utils.parseEther(String(value));
}