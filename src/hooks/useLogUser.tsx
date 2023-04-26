import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { bigNumberishToNumber } from "../utils/bigIntToNumber";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../redux/loggedUserSlice";
import { setCurrentLocation } from "../redux/currentLocationSlice";
import { Locations, Severity } from "../types";
import { setSnackBar } from "../redux/notificationsSlice";

export const useLogUser = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    try {
      (window as any).ethereum.enable();

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
      dispatch(
        setSnackBar({
          severity: "success",
          msg: "Successfully logged in.",
        })
      );
    } catch (error) {
      dispatch(
        setSnackBar({
          severity: Severity.ERROR,
          msg: "You have to login into your MetaMask extension first.",
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, login };
};
