import React from "react";
import { Form } from "../../Form";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../../redux/currentLocationSlice";
import { Locations, Severity } from "../../../types";
import { setSnackBar } from "../../../redux/notificationsSlice";

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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Button
        variant="text"
        sx={{ color: "secondary.main", position: "absolute", left: 0 }}
        startIcon={<ArrowBackIcon />}
        onClick={() => dispatch(setCurrentLocation(Locations.PROJECTS))}
      >
        Back to projects
      </Button>
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