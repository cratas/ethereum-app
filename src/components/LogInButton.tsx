import React from "react";
import { Button } from "@mui/material";
import { useLogUser } from "../hooks/useLogUser";

export const LogInButton = () => {
  const { login } = useLogUser();

  const handleButtonClick = async () => {
    await login();
  };

  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "secondary.main",
        color: "primary.main",
        "&:hover": {
          bgcolor: "primary.main",
          color: "secondary.main",
        },
      }}
      onClick={handleButtonClick}
    >
      Log In
    </Button>
  );
};
