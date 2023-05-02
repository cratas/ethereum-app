import React from "react";
import { Locations, Project } from "../../../types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { ProgressBar } from "../projects/ProgressBar";
import { getDaysLeft } from "../../../utils/getDaysLeft";
import { NumberCard } from "../../NumberCard";
import { FundBox } from "../../FundBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import IconButton from "@mui/material/IconButton";
import metamaskLogo from "../../../assets/metamask.png";
import { ListItem } from "../../ListItem";
import { UserAddress } from "../../UserAddress";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../../redux/currentLocationSlice";

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({
  project: {
    id,
    title,
    currentValue,
    goal,
    description,
    image,
    deadline,
    owner,
    investors,
    investments,
  },
}: ProjectDetailProps) => {
  const dispatch = useDispatch();

  return (
    <Grid container position="relative">
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
      <Grid item xs={12} mb={2} mt={-1} textAlign="center">
        <Typography variant="h4" fontWeight="bold" color="secondary.main">
          {title}
          <TipsAndUpdatesIcon
            sx={{ color: "#FFBF00", ml: 2 }}
            fontSize="large"
          />
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Paper sx={{ height: "20rem", overflow: "hidden", mb: 1 }}>
          <img
            src={image}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Paper>
        <ProgressBar value={(currentValue / goal) * 100} />
      </Grid>
      <Grid container item xs={2} pl={2} gap={2}>
        <NumberCard title="Days left" value={getDaysLeft(new Date(deadline))} />
        <NumberCard title="Goal" value={goal} />
        <NumberCard title="Collected" value={currentValue} />
      </Grid>
      <Grid item xs={7} mt={4} pr={3}>
        <ListItem title="Creator">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ p: 0.9, bgcolor: "secondary.main", mr: 1 }}
            >
              <img src={metamaskLogo} alt="Logo" width={30} />
            </IconButton>

            <Box>
              <Typography
                variant="inherit"
                sx={{
                  color: "text.secondary",
                }}
              >
                Address
              </Typography>
              <UserAddress address={owner} />
            </Box>
          </Box>
        </ListItem>
        <ListItem title="Description">
          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            {description}
          </Typography>
        </ListItem>
        <ListItem title="Donators">
          {investors ? (
            investors.map((name, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  width: "100%",
                  bgcolor: "primary.light",
                  borderRadius: 2,
                  justifyContent: "space-between",
                  color: "text.secondary",
                  py: 0.5,
                  my: 1,
                }}
              >
                <Box ml={2} sx={{ display: "flex" }}>
                  <Box mr={0.5}>{idx + "."}</Box>
                  <UserAddress address={name} />
                </Box>
                <Box mr={2} fontWeight="bold">
                  {investments[idx]}
                </Box>
              </Box>
            ))
          ) : (
            <Typography color="text.secondary">No donations yet</Typography>
          )}
        </ListItem>
      </Grid>
      <Grid item xs={5} mt={4}>
        <FundBox projectId={id} />
      </Grid>
    </Grid>
  );
};
