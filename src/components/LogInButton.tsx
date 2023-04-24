import React from "react";
import { Button } from "@mui/material";
import { useLogUser } from "../hooks/useLogUser";

const LogInButton = () => {
  const { login } = useLogUser();

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "secondary.main",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
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
