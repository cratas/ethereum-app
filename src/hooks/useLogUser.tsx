import React, { useState } from "react";
import { ethers } from "ethers";
import { bigNumberishToNumber } from "../utils/bigIntToNumber";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../redux/loggedUserSlice";
import { setCurrentLocation } from "../redux/currentLocationSlice";
import { Locations } from "../types";

export const useLogUser = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const user = provider.getSigner();

      const bigNumberishNumber = await user.getBalance();
      const bigNumberishGasPrice = await user.getGasPrice();

      const address = await user.getAddress();
      const balance = bigNumberishToNumber(bigNumberishNumber);
      const transactionsCount = await user.getTransactionCount();
      const chainId = await user.getChainId();
      const gasPrice = bigNumberishToNumber(bigNumberishGasPrice);

      dispatch(
        setLoggedUser({
          address,
          balance,
          chainId,
          transactionsCount,
          gasPrice,
        })
      );
      dispatch(setCurrentLocation(Locations.PROJECTS));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, login };
};
