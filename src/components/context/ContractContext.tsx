import React, { createContext, useContext } from "react";
import { CrowdFunding } from "../../../typechain-types";
import { Contract, ethers } from "ethers";
import { abi } from "../../../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";

import { address } from "../../../contract.json";
import { Project } from "../../types";
import { numberToBigInt } from "../../utils/numberToBigInt";

interface ContractState {
  contract: null | CrowdFunding;
  createProject: (data: Project) => Promise<void>;
}
const ContractContext = createContext<ContractState>({
  contract: null,
  createProject: async () => {},
});

export const ContractContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  (window as any).ethereum.enable();

  const provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const user = provider.getSigner();
  const contract = new Contract(address, abi, user) as CrowdFunding;

  const createProject = async (data: Project) => {
    const { title, description, goal, deadline, image } = data;

    const convertedDate = numberToBigInt(deadline.getTime());
    const convertedGoal = numberToBigInt(goal.toString());

    await contract.createProject(
      user.getAddress(),
      title,
      description,
      convertedDate,
      convertedGoal,
      image
    );
  };

  return (
    <ContractContext.Provider value={{ contract, createProject }}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContractContext = () => useContext(ContractContext);
