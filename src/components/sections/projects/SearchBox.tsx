import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

export interface SearchBoxProps {
  debounce?: number;
  onSearchChange?: (value: string) => void;
  placeholder?: string;
  width?: number;
}

export const SearchBox = ({
  width,
  onSearchChange,
  placeholder,
  debounce = 100,
}: SearchBoxProps) => {
  const [search, setSearch] = useState<string | null>(null);
  const { debouncedValue } = useDebounce<string | null>(search, debounce);

  const handleSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.currentTarget.value);
  };

  useEffect(() => {
    if (debouncedValue !== null && onSearchChange) {
      onSearchChange(debouncedValue);
    }
  }, [debouncedValue, onSearchChange]);

  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width,
        maxHeight: "30px",
        boxShadow: "none",
        borderWidth: "1px",
        bgcolor: "primary.second",
        borderRadius: 2
      }}
    >
      <InputBase
        inputProps={{ "aria-label": placeholder }}
        placeholder={placeholder}
        sx={{
          ml: 1,
          flex: 1,
          fontSize: "0.875rem",
          color: "text.light",
        }}
        onChange={handleSearchChange}
      />
      <SearchIcon />
    </Paper>
  );
};
