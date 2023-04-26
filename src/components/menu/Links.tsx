import React from "react";
import { Link, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser } from "../../redux/loggedUserSlice";
import { Locations } from "../../types";
import {
  selectCurrentLocation,
  setCurrentLocation,
} from "../../redux/currentLocationSlice";

export const Links = () => {
  const loggedUser = useSelector(selectLoggedUser);
  const dispatch = useDispatch();
  const currentLocation = useSelector(selectCurrentLocation);

  return (
    <Box sx={{ width: "45%" }}>
      {loggedUser && (
        <Box>
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
            <Button
              startIcon={<AddIcon />}
              size="medium"
              variant="contained"
              sx={{
                bgcolor: "secondary.main",
                color: "primary.main",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "secondary.main",
                },
              }}
            >
              Create Project
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};
