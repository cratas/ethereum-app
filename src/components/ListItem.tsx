import { Box, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface ListItemProps {
  title: string;
}

export const ListItem = ({
  title,
  children,
}: PropsWithChildren<ListItemProps>) => {
  return (
    <Box mb={4}>
      <Typography
        variant="h6"
        sx={{ color: "secondary.main", fontWeight: "bold", mb: 1 }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};
