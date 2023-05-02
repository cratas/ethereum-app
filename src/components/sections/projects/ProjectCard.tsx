import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ProgressBar } from "./ProgressBar";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../../redux/currentLocationSlice";
import { Locations, Project } from "../../../types";
import { getDaysTo } from "../../../utils/getDaysTo";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const dispatch = useDispatch();
  const { title, goal, currentValue, description, image, deadline } = project;

  return (
    <Card
      sx={{ width: 280 }}
      onClick={() =>
        dispatch(
          setCurrentLocation({
            location: Locations.PROJECT_DETAIL,
            props: {...project, deadline: project.deadline.toISOString() },
          })
        )
      }
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Project image"
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description.slice(0, 30) + " ..."}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box
              sx={{
                textAlign: "center",
                borderRadius: 2,
                width: "47%",
                py: 0.6,
                bgcolor: "primary.light",
              }}
            >
              <Typography
                variant="body2"
                color="secondary.main"
                fontWeight="bold"
              >
                {currentValue} ETH
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Collected
              </Typography>
            </Box>

            <Box
              sx={{
                textAlign: "center",
                width: "47%",
                borderRadius: 2,
                py: 0.6,
                bgcolor: "primary.light",
              }}
            >
              <Typography
                variant="body2"
                color="secondary.main"
                fontWeight="bold"
              >
                {getDaysTo(deadline)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Days remain
              </Typography>
            </Box>
          </Box>

          <ProgressBar value={(currentValue / goal) * 100} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
