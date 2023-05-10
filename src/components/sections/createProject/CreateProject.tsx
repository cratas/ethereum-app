import React from "react";
import { Form } from "../../Form";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../../redux/currentLocationSlice";
import { Locations, Project, Severity } from "../../../types";
import { setSnackBar } from "../../../redux/notificationsSlice";
import { useContractContext } from "../../context/ContractContext";

export const CreateProject = () => {
  const dispatch = useDispatch();
  const { createProject } = useContractContext();

  const handleFormSubmit = async (data: Project) => {
    const newProject = {
      ...data,
      deadline: new Date(data.deadline),
      image:
        !(data.image.length > 1)
          ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
          : data.image,
    };

    try {
      await createProject(newProject);

      dispatch(setCurrentLocation({ location: Locations.PROJECTS }));
      dispatch(
        setSnackBar({
          msg: "Project successfully created.",
          severity: Severity.SUCCESS,
        })
      );
    } catch (error) {
      dispatch(
        setSnackBar({
          msg: "Project wasn't created, something went wrong.",
          severity: Severity.ERROR,
        })
      );
    }
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
        onClick={() =>
          dispatch(setCurrentLocation({ location: Locations.PROJECTS }))
        }
      >
        Back to projects
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
          mt: -1,
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
