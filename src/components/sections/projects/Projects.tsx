import React, { useEffect, useMemo, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ProjectsHeader } from "./projectsHeaders/ProjectsHeader";
import { ProjectCard } from "./ProjectCard";
import { useContractContext } from "../../context/ContractContext";
import { CrowdFunding } from "../../../../typechain-types";
import { Project } from "../../../types";
import { convertProjectData } from "../../../utils/convertProjectData";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../../redux/loggedUserSlice";
import { filterByTabs } from "../../../utils/filterByTabs";

export const Projects = () => {
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [originalProjects, setOriginalProjects] = useState<Project[]>([]);
  const [sortDirection, setSortDirection] = useState<string>("desc");
  const [filterMode, setFilterMode] = useState(0);
  const { address } = useSelector(selectLoggedUser) ?? {};

  const { contract } = useContractContext();

  useEffect(() => {
    let fetchedProjects: CrowdFunding.ProjectStructOutput[] = [];

    const fetchData = async () => {
      fetchedProjects = await (contract as CrowdFunding).getProjects();
      const originalFetchedProjects = convertProjectData(fetchedProjects);
      setProjects(originalFetchedProjects);
      setOriginalProjects(originalFetchedProjects);
    };

    fetchData();
  }, []);

  const onSearchChange = (data: string) => {
    setCurrentSearch(data);
  };

  const calculateData = useMemo(
    () =>
      originalProjects
        .filter(
          (item: Project) =>
            filterByTabs(item, filterMode, address) &&
            (!currentSearch ||
              item.owner === currentSearch ||
              item.title.toLowerCase().includes(currentSearch))
        ),
    [currentSearch, filterMode]
  );

  useEffect(() => {
    setProjects(calculateData);
  }, [currentSearch, calculateData, filterMode]);

  return (
    <Grid container>
      <ProjectsHeader
        onSearchChange={onSearchChange}
        onSortItems={setSortDirection}
        onFilterModeChange={setFilterMode}
      />
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
        {projects
          .sort(
            (a: Project, b: Project) =>
              new Date(
                sortDirection === "desc" ? b.deadline : a.deadline
              ).getTime() -
              new Date(
                sortDirection === "desc" ? a.deadline : b.deadline
              ).getTime()
          )
          .map((p: Project, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
      </Box>
    </Grid>
  );
};
