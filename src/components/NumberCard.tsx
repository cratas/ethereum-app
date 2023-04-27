import { Grid } from "@mui/material";
import React from "react";

export const NumberCard = ({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) => (
  <Grid
    container
    sx={{
      bgcolor: "primary.light",
      borderRadius: 2,
      textAlign: "center",
    }}
  >
    <Grid
      item
      xs={12}
      p={1}
      fontSize={30}
      fontWeight="bold"
      color="secondary.main"
    >
      {value}
    </Grid>
    <Grid
      item
      xs={12}
      sx={{
        bgcolor: "primary.dark",
        color: "text.secondary",
        p: 1,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        fontWeight: "bold",
      }}
    >
      {title}
    </Grid>
  </Grid>
);
