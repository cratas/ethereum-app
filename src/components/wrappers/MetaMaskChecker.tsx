import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import { useLogUser } from "../../hooks/useLogUser";

interface MetaMaskCheckerProps {
  children: React.ReactNode;
}

export const MetaMaskChecker = ({ children }: MetaMaskCheckerProps) => {
  const { login } = useLogUser();
  const isInstalled =
    (window as any).ethereum && (window as any).ethereum.isMetaMask;

  (window as any).ethereum?.on("accountsChanged", function () {
    login();
  });

  return isInstalled ? (
    (children as JSX.Element)
  ) : (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "40rem",
          gap: 4,
          p: 3,
          bgcolor: "primary.main",
          border: "2px solid black",
          borderColor: "secondary.main",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="600"
          sx={{ color: "secondary.main" }}
        >
          MetaMask extension is not installed!
        </Typography>
        <Typography fontWeight="400" sx={{ color: "secondary.main" }}>
          This application requires metamask extension to be installed in your
          browser. please install metamask extension using the button below.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            color: "primary.main",
            mt: 3,
          }}
          onClick={() => (location.href = "https://metamask.io/")}
        >
          Install
        </Button>
      </Box>
    </Box>
  );
};
