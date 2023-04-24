import metamaskLogo from "../../assets/metamask.png";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser, setLoggedUser } from "../../redux/loggedUserSlice";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { Button, Tooltip } from "@mui/material";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import LogInButton from "../LogInButton";
import { useLogUser } from "../../hooks/useLogUser";
import { hideModal, showProfileModal } from "../../redux/modalsSlice";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { login } = useLogUser();

  const loggedUser = useSelector(selectLoggedUser);
  const { address, balance } = loggedUser ?? {};

  const handleProfileClick = () => {
    dispatch(
      showProfileModal({
        title: "Profile details",
        contentMessage: "some",
      })
    );
    handleClose();
  };

  const handleLogOutClick = () => {
    dispatch(setLoggedUser(null));
    handleClose();
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "45%", textAlign: "right" }}>
      {balance && address ? (
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Box>
              <Typography
                variant="inherit"
                sx={{
                  color: "secondary.main",
                  fontWeight: "bold",
                }}
              >
                {balance + " ETH"}
              </Typography>
              <Tooltip
                title="Click to copy"
                arrow
                placement="left-start"
                onClick={() => {
                  navigator.clipboard.writeText(address);
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{
                    color: "secondary.main",
                    cursor: "pointer",
                  }}
                >
                  {address}
                </Typography>
              </Tooltip>
            </Box>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ ml: 1.5, p: 0.9, bgcolor: "secondary.main" }}
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
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={login}>Relog</MenuItem>
            <MenuItem onClick={handleLogOutClick}>Log out</MenuItem>
          </Menu>
        </div>
      ) : (
        <LogInButton />
      )}
    </Box>
  );
};
