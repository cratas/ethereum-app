import React from "react";
import logo from "../../assets/logo.png";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLocation } from "../../redux/currentLocationSlice";
import { Locations } from "../../types";
import { selectLoggedUser } from "../../redux/loggedUserSlice";

export const LogoIcon = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectLoggedUser);

  const handleIconClick = () => {
    !!loggedUser &&
      dispatch(setCurrentLocation({ location: Locations.PROJECTS }));
  };

  return (
    <Box
      sx={{ width: "10%", textAlign: "center", cursor: "pointer" }}
      onClick={() => handleIconClick()}
    >
      <img src={logo} alt="Logo" width={60} />
    </Box>
  );
};
