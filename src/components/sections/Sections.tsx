import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../../redux/currentLocationSlice";
import { Box } from "@mui/system";
import { Locations } from "../../types";
import { CreateProject } from "./createProject/CreateProject";
import { Projects } from "./projects/Projects";
import { selectLoggedUser } from "../../redux/loggedUserSlice";
import { Unauthorized } from "./Unauthorized";


export const Sections = () => {
  const currentLocation = useSelector(selectCurrentLocation);
  const loggedUser = useSelector(selectLoggedUser);

  return loggedUser ? (
    <Box
      sx={{
        p: 3,
        border: "2px solid black",
        borderColor: 'secondary.main',
        borderRadius: 2,
        my: 2,
        minHeight: "34rem",
      }}
    >
      {currentLocation === Locations.CREATE_PROJECT && <CreateProject />}
      {currentLocation === Locations.PROJECTS && <Projects />}
    </Box>
  ) : (
    <Unauthorized />
  );
};
