import React, { useEffect, useMemo, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ProjectsHeader } from "./projectsHeaders/ProjectsHeader";
import { ProjectCard } from "./ProjectCard";
import { useContractContext } from "../../context/ContractContext";

export const Projects = () => {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [projects, setProjects] = useState<any>(projectsMock);

  const { contract } = useContractContext();
  console.log(contract);

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
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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
    owner: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    imageURL:
      "https://media.istockphoto.com/id/901948904/cs/fotografie/hrom%C3%A1dka-%C3%A9terov%C3%BDch-minc%C3%AD-se-zlat%C3%BDm-pozad%C3%ADm.jpg?s=2048x2048&w=is&k=20&c=BvSR70Np7bnfRJFFvPDCu7cUbJBT-bJsTR3COoN3JHs=",
  },
  {
    title: "pavel",
    description: "hello this is some desc blgba bla",
    goal: 100,
    date: new Date().toString(),
    currentValue: 20,
    owner: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",

    imageURL:
      "https://media.istockphoto.com/id/901948904/cs/fotografie/hrom%C3%A1dka-%C3%A9terov%C3%BDch-minc%C3%AD-se-zlat%C3%BDm-pozad%C3%ADm.jpg?s=2048x2048&w=is&k=20&c=BvSR70Np7bnfRJFFvPDCu7cUbJBT-bJsTR3COoN3JHs=",
  },
  {
    title: "jarda",
    description: "hello this is some desc blgba bla",
    goal: 100,
    date: new Date().toString(),
    currentValue: 20,
    owner: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",

    imageURL:
      "https://media.istockphoto.com/id/901948904/cs/fotografie/hrom%C3%A1dka-%C3%A9terov%C3%BDch-minc%C3%AD-se-zlat%C3%BDm-pozad%C3%ADm.jpg?s=2048x2048&w=is&k=20&c=BvSR70Np7bnfRJFFvPDCu7cUbJBT-bJsTR3COoN3JHs=",
  },
  {
    title: "vlastik",
    description:
      "hello this is some desc blgba bla hello this is some desc blgba bla",
    goal: 100,
    date: new Date().toString(),
    owner: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    currentValue: 50,
    imageURL:
      "https://media.istockphoto.com/id/901948904/cs/fotografie/hrom%C3%A1dka-%C3%A9terov%C3%BDch-minc%C3%AD-se-zlat%C3%BDm-pozad%C3%ADm.jpg?s=2048x2048&w=is&k=20&c=BvSR70Np7bnfRJFFvPDCu7cUbJBT-bJsTR3COoN3JHs=",
  },
  {
    title: "vlastik",
    description:
      "hello this is some desc blgba bla hello this is some desc blgba bla",
    goal: 100,
    date: new Date(new Date().getTime() + 20 * 24 * 60 * 60 * 1000).toString(),
    currentValue: 80,
    owner: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    donators: [
      { name: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", value: 0.2 },
      { name: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", value: 0.45 },
      { name: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", value: 2.3 },
    ],
    imageURL:
      "https://media.istockphoto.com/id/901948904/cs/fotografie/hrom%C3%A1dka-%C3%A9terov%C3%BDch-minc%C3%AD-se-zlat%C3%BDm-pozad%C3%ADm.jpg?s=2048x2048&w=is&k=20&c=BvSR70Np7bnfRJFFvPDCu7cUbJBT-bJsTR3COoN3JHs=",
  },
];
