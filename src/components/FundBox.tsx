import { Box, Button, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { InputAdornment } from "@mui/material";
import { useContractContext } from "./context/ContractContext";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../redux/notificationsSlice";
import { Project, Severity } from "../types";
import { numberToBigInt } from "../utils/numberToBigInt";
import { useLogUser } from "../hooks/useLogUser";

export const FundBox = ({ project }: { project: Project }) => {
  const { id, deadline } = project;
  const {login} = useLogUser();

  const [fundValue, setFundValue] = useState<string>();
  const { contract } = useContractContext();
  const dispatch = useDispatch();

  const onFundValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFundValue(e.target.value);
  };

  const handleButtonClick = async () => {
    if (fundValue) {
      try {
        const tx = await contract?.investToProject(id, {
          value: numberToBigInt(fundValue),
        });

        await tx?.wait();

        dispatch(
          setSnackBar({
            severity: Severity.SUCCESS,
            msg: "Successfully invested into project.",
          })
        );

        await login(false);
      } catch (error) {
        dispatch(
          setSnackBar({
            severity: Severity.ERROR,
            msg: "Something went wrong, transaction was not completed.",
          })
        );
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "primary.dark",
        flexDirection: "column",
        textAlign: "center",
        borderRadius: 2,
        p: 2,
        gap: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
        }}
      >
        Add to collection
      </Typography>

      <TextField
        variant="outlined"
        disabled={new Date(deadline) < new Date()}
        fullWidth
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 0 }}
        value={fundValue || ""}
        onChange={onFundValueChange}
        type="number"
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "secondary.main",
            },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "secondary.main",
          },
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
        }}
      />
      <Typography
        sx={{
          color: "text.secondary",
          textAlign: "left",
          fontStyle: "italic",
        }}
      >
        * Please note that clicking the button is binding and will result in a
        deduction from your balance.
      </Typography>

      <Button
        size="large"
        disabled={new Date(deadline) < new Date()}
        variant="contained"
        onClick={handleButtonClick}
        sx={{
          bgcolor: "secondary.main",
          color: "primary.main",
          "&:hover": {
            bgcolor: "primary.main",
            color: "secondary.main",
          },
        }}
      >
        Confirm
      </Button>
    </Box>
  );
};
