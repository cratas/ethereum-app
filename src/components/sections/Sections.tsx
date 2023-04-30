import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../../redux/currentLocationSlice";
import { Box } from "@mui/system";
import { Locations } from "../../types";
import { CreateProject } from "./createProject/CreateProject";
import { Projects } from "./projects/Projects";
import { selectLoggedUser } from "../../redux/loggedUserSlice";
import { Unauthorized } from "./Unauthorized";
import { ProjectDetail } from "./projectDetail/ProjectDetail";
import { ContractContextProvider } from "../context/ContractContext";

export const Sections = () => {
  const { location, props } = useSelector(selectCurrentLocation);
  const loggedUser = useSelector(selectLoggedUser);


  return loggedUser ? (
    <Box
      sx={{
        p: 3,
        border: "2px solid black",
        borderColor: "secondary.main",
        borderRadius: 2,
        mt: 2,
        minHeight: "34rem",
      }}
    >
      <ContractContextProvider>
        {location === Locations.CREATE_PROJECT && <CreateProject />}
        {location === Locations.PROJECTS && <Projects />}
        {location === Locations.PROJECT_DETAIL && (
          <ProjectDetail project={props} />
        )}
      </ContractContextProvider>
    </Box>
  ) : (
    <Unauthorized />
  );
};
