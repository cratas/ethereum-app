import React from "react";
import LogInButton from "../LogInButton";
import { Box } from "@mui/system";
import logo from "../../assets/ethereum-network.png";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const levitate = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const LevitatingImage = styled.img`
  animation: ${levitate} 2s ease-in-out infinite;
`;


export const Unauthorized = () => {
  return (
    <Grid container mt={13}>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LevitatingImage src={logo} alt="Logo" width={500} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
            gap: 5,
            ml: 2,
            pr: 5,
            mt: 1
          }}
        >
          <Typography sx={{ color: "secondary.main" }} variant="h2">
            <b>Decentralised</b>
            <br />
            crowdfunding
          </Typography>
          <Typography sx={{ color: "secondary.main" }}>
            Join our Ethereum-based decentralized crowdfunding platform for safe
            and transparent project funding. Leverage blockchain technology for
            secure finances and a fully decentralized crowdfunding process.
            Support new and innovative projects today!
          </Typography>
          <LogInButton />
        </Box>
      </Grid>
    </Grid>
  );
};
