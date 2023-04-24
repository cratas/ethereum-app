import React from "react";
import { Button } from "@mui/material";
import { useLogUser } from "../hooks/useLogUser";

const LogInButton = () => {
  const { login } = useLogUser();

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
      onClick={login}
    >
      Log In
    </Button>
  );
};

export default LogInButton;
