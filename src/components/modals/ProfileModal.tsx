import React from "react";
import { ModalBase } from "./ModalBase";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../redux/modalsSlice";
import { selectLoggedUser } from "../../redux/loggedUserSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import NumbersIcon from "@mui/icons-material/Numbers";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import LinkIcon from "@mui/icons-material/Link";

interface ProfileModalProps {
  contentMessage?: React.ReactNode;
  title?: string;
}

export const ProfileModal = ({ title, contentMessage }: ProfileModalProps) => {
  const dispatch = useDispatch();
  const { address, balance, chainId, gasPrice, transactionsCount } =
    useSelector(selectLoggedUser) ?? {};

  const handleCancel = () => {
    dispatch(hideModal());
  };

  const CustomListItemText = (props: {
    primary: string | undefined;
    secondary: string | number | undefined;
  }) => (
    <ListItemText
      primaryTypographyProps={{ sx: { fontWeight: "bold" } }}
      {...props}
    />
  );

  return (
    <ModalBase title={title} onCloseModal={handleCancel}>
      <List sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 2, }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AlternateEmailIcon />
            </Avatar>
          </ListItemAvatar>
          <CustomListItemText primary="Address" secondary={address} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AttachMoneyIcon />
            </Avatar>
          </ListItemAvatar>
          <CustomListItemText primary="Balance" secondary={balance} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <NumbersIcon />
            </Avatar>
          </ListItemAvatar>
          <CustomListItemText
            primary="Number of transactions"
            secondary={transactionsCount}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MoneyOffIcon />
            </Avatar>
          </ListItemAvatar>
          <CustomListItemText primary="Gas price" secondary={gasPrice} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LinkIcon />
            </Avatar>
          </ListItemAvatar>
          <CustomListItemText primary="Chain ID" secondary={chainId} />
        </ListItem>
      </List>
    </ModalBase>
  );
};
