import React, { useEffect, useMemo, useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [projects, setProjects] = useState<any>(projectsMock);

  const onSearchChange = (data: string) => {
    setCurrentSearch(data);
  };

  const calculateData = useMemo(
    () =>
    projectsMock?.filter(
        (item: any) =>
          !currentSearch || item.title.toLowerCase().includes(currentSearch)
      ),
    [currentSearch]
  );

  useEffect(() => {
    setProjects(calculateData);
  }, [currentSearch, calculateData]);

  return (
    <Grid container>
      <ProjectsHeader onSearchChange={onSearchChange} />
      <Grid item xs={12}>
        <Typography sx={{ color: "secondary.main", fontWeight: "bold", my: 1 }}>
          All projects ({projects.length})
        </Typography>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 2.5,
        }}
      >
        {calculateData?.map((p: any, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </Box>
    </Grid>
  );
};

const projectsMock = [
  {
    title: "kamil",
    description: "hello this is some desc blgba bla",
    goal: 100,
    date: new Date().toString(),
    currentValue: 20,
  },
  {
    title: "pavel",
    description: "hello this is some desc blgba bla",
    goal: 100,
    date: new Date().toString(),
    currentValue: 20,
  },
  {
    title: "jarda",
    description: "hello this is some desc blgba bla",
    goal: 100,
    date: new Date().toString(),
    currentValue: 20,
  },
  {
    title: "vlastik",
    description:
      "hello this is some desc blgba bla hello this is some desc blgba bla",
    goal: 100,
    date: new Date().toString(),
    currentValue: 50,
  },
  {
    title: "vlastik",
    description:
      "hello this is some desc blgba bla hello this is some desc blgba bla",
    goal: 100,
    date: new Date().toString(),
    currentValue: 80,
  },
];
