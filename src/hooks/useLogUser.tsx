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

      const address = await user.getAddress();
      const bigNumberishNumber = await user.getBalance();
      const balance = bigNumberishToNumber(bigNumberishNumber);

      dispatch(setLoggedUser({ address, balance }));
      dispatch(setCurrentLocation(Locations.PROJECTS));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, login };
};