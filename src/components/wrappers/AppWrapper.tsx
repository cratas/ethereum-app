import { Container } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "primary.main",
        pb: 2
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ minHeight: "95vh", pt: 2 }}>{children}</Box>
      </Container>
    </Box>
  );
};
