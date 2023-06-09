import React from "react";
import { Locations, Project } from "../../../types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { ProgressBar } from "../projects/ProgressBar";
import { NumberCard } from "../../NumberCard";
import { FundBox } from "../../FundBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import IconButton from "@mui/material/IconButton";
import metamaskLogo from "../../../assets/metamask.png";
import { ListItem } from "../../ListItem";
import { UserAddress } from "../../UserAddress";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLocation } from "../../../redux/currentLocationSlice";
import dayjs from "dayjs";
import { selectLoggedUser } from "../../../redux/loggedUserSlice";
import { useContractContext } from "../../context/ContractContext";
import { calcProgressStatus } from "../../../utils/calcProgressStatus";
import { CrowdFunding } from "../../../../typechain-types";
import { useLogUser } from "../../../hooks/useLogUser";

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const dispatch = useDispatch();
  const {
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
    isClosed,
  } = project;
  const { address } = useSelector(selectLoggedUser) ?? {};
  const { contract } = useContractContext();
  const { login } = useLogUser();

  const handleClickCloseProjectButton = async () => {
    await (contract as CrowdFunding).closeProject(id);
    login(false);
  };

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
      {owner === address && new Date(deadline) < new Date() && !isClosed && (
        <Button
          variant="contained"
          sx={{
            bgcolor: "red",
            color: "primary.main",
            "&:hover": {
              bgcolor: "primary.main",
              color: "secondary.main",
            },
            position: "absolute",
            right: 0,
          }}
          onClick={handleClickCloseProjectButton}
        >
          Close and process investments
        </Button>
      )}
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
        <ProgressBar value={calcProgressStatus(currentValue, goal)} />
      </Grid>
      <Grid container item xs={2} pl={2} gap={2}>
        <NumberCard
          title="Deadline"
          value={dayjs(new Date(deadline)).format("DD.MM.YYYY HH:mm")}
          valueFontsize={17}
        />
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
        <FundBox project={project} />
      </Grid>
    </Grid>
  );
};
