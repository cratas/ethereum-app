import React from "react";
import { Form } from "../Form";
import { Box, Typography } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../redux/currentLocationSlice";
import { Locations, Severity } from "../../types";
import { setSnackBar } from "../../redux/notificationsSlice";

type Props = {};

export const CreateProject = (props: Props) => {
  const dispatch = useDispatch();

  const handleFormSubmit = (data: any) => {
    console.log(data);
    dispatch(setCurrentLocation(Locations.PROJECTS));
    dispatch(
      setSnackBar({
        msg: "Project successfully created.",
        severity: Severity.SUCCESS,
      })
    );
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "secondary.main" }}
        >
          Start a project
        </Typography>
        <TipsAndUpdatesIcon sx={{ color: "#FFBF00", ml: 2 }} fontSize="large" />
      </Box>
      <Form onSubmit={handleFormSubmit} />
    </Box>
  );
};
