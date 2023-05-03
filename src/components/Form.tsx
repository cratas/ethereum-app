import React from "react";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Button, FormControl, Grid } from "@mui/material";
import { MobileDateTimePicker  } from "@mui/x-date-pickers/MobileDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Project } from "../types";

interface FormProps {
  onSubmit: (data: Project) => void;
}

const tomorrow = dayjs().add(1, "hour");

export const Form = ({ onSubmit }: FormProps) => {
  const { handleSubmit, control } = useForm();

  return (
    <FormControl sx={{ width: "100%" }}>
      <Grid container>
        <Grid item xs={5} sx={{ my: 1, pr: 1 }}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Title of your project *"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "secondary.main",
                    },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary.main",
                  },
                }}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Title is required" }}
          />
        </Grid>
        <Grid item xs={4} sx={{ my: 1, px: 1 }}>
          <Controller
            name="goal"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Goal *"
                variant="outlined"
                fullWidth
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 0 }}
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
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
                  startAdornment: (
                    <InputAdornment position="start">ETH</InputAdornment>
                  ),
                }}
              />
            )}
            rules={{
              required: "Goal is required",
              min: {
                value: 0,
                message: "Goal must be greater than or equal to 0",
              },
            }}
          />
        </Grid>
        <Grid item xs={3} sx={{ my: 1, pl: 1 }}>
          <Controller
            name="deadline"
            control={control}
            defaultValue={tomorrow}
            render={({ field: { onChange, value } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDateTimePicker 
                  label="Deadline"
                  minDate={tomorrow}
                  value={value}
                  onChange={onChange}
                  format="MM/DD/YYYY hh:mm"
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "secondary.main",
                      },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "secondary.main",
                    },
                  }}
                  disablePast
                />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ my: 1 }}>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Description of project *"
                variant="outlined"
                fullWidth
                minRows={6}
                multiline
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "secondary.main",
                    },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary.main",
                  },
                }}
              />
            )}
            rules={{ required: "Description is required" }}
          />
        </Grid>
        <Grid item xs={12} sx={{ my: 1 }}>
          <Controller
            name="image"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Place image URL"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                fullWidth
                helperText={error ? error.message : null}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "secondary.main",
                    },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary.main",
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ mt: 3, mb: 1, display: "flex", justifyContent: "center" }}
        >
          <Button
            size="large"
            onClick={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
              color: "primary.main",
              "&:hover": {
                bgcolor: "primary.main",
                color: "secondary.main",
              },
            }}
          >
            Create project
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};
