import React from "react";
import { Link } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser } from "../../redux/loggedUserSlice";
import { Locations } from "../../types";
import {
  selectCurrentLocation,
  setCurrentLocation,
} from "../../redux/currentLocationSlice";

export const Links = () => {
  const { loggedUser } = useSelector(selectLoggedUser);
  const dispatch = useDispatch();
  const { currentLocation } = useSelector(selectCurrentLocation);

  return (
    <Box sx={{ width: "45%" }}>
      {loggedUser && (
        <Box>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "secondary.main",
              fontWeight: currentLocation == Locations.PROJECTS ? "bold" : null,
              mr: "1.5rem!important",
            }}
            onClick={() => dispatch(setCurrentLocation(Locations.PROJECTS))}
          >
            Projects
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "secondary.main",
              fontWeight:
                currentLocation == Locations.CREATE_PROJECT ? "bold" : null,
            }}
            onClick={() =>
              dispatch(setCurrentLocation(Locations.CREATE_PROJECT))
            }
          >
            Create project
          </Link>
        </Box>
      )}
    </Box>
  );
};
