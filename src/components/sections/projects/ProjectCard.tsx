import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ProgressBar } from "./ProgressBar";
import { Box } from "@mui/material";

interface ProjectCardProps {
  project: any;
}

export const ProjectCard = ({
  project: { title, goal, currentValue, description },
}: ProjectCardProps) => {
  return (
    <Card
      sx={{ width: 280 }}
      onClick={() => {
        console.log("TODO");
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/901948904/cs/fotografie/hrom%C3%A1dka-%C3%A9terov%C3%BDch-minc%C3%AD-se-zlat%C3%BDm-pozad%C3%ADm.jpg?s=2048x2048&w=is&k=20&c=BvSR70Np7bnfRJFFvPDCu7cUbJBT-bJsTR3COoN3JHs="
          alt="green iguana"
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
            {description.slice(0, 39) + " ..."}
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
                {currentValue} %
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
                {goal}
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
