import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../../redux/currentLocationSlice";
import { Box } from "@mui/system";
import { Locations } from "../../types";
import { CreateProject } from "./CreateProject";
import { Projects } from "./Projects";
import { selectLoggedUser } from "../../redux/loggedUserSlice";

type Props = {};

export const Sections = (props: Props) => {
  const currentLocation = useSelector(selectCurrentLocation);
  const loggedUser = useSelector(selectLoggedUser);

  return loggedUser ? (
    <Box
      sx={{
        p: 3,
        border: "2px solid black",
        borderRadius: 2,
        mt: 2,
        minHeight: "40rem",
      }}
    >
      {currentLocation === Locations.CREATE_PROJECT && <CreateProject />}
      {currentLocation === Locations.PROJECTS && <Projects />}
    </Box>
  ) : null;
};
