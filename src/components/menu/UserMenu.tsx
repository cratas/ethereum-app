import metamaskLogo from "../../assets/metamask.png";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser, setLoggedUser } from "../../redux/loggedUserSlice";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { setCurrentLocation } from "../../redux/currentLocationSlice";
import { Locations } from "../../types";

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedUser } = useSelector(selectLoggedUser);
  const dispatch = useDispatch();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogInClick = () => {
    dispatch(setLoggedUser("kamil"));
    dispatch(setCurrentLocation(Locations.PROJECTS));
  };

  const handleLogOutClick = () => {
    dispatch(setLoggedUser(null));
    handleClose();
  };

  return (
    <Box sx={{ width: "45%", textAlign: "right" }}>
      {loggedUser ? (
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Typography
              variant="inherit"
              sx={{ color: "secondary.main", fontWeight: "bold" }}
            >
              {loggedUser}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ ml: 0.5, p: 1 }}
            >
              <img src={metamaskLogo} alt="Logo" width={30} />
            </IconButton>
          </Box>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogOutClick}>Log out</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button
          variant="outlined"
          sx={{ backgroundColor: "secondary.main" }}
          onClick={handleLogInClick}
        >
          Log In
        </Button>
      )}
    </Box>
  );
};
