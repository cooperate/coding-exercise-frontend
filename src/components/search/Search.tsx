import React from "react";
import Input from "../input/Input";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";

const Search = (props: any) => {
  const {updateSearchTerm} = props;
  const handleChange = (e: any) => {
    updateSearchTerm(e.target.value);
  }
  return (
      <Input
        fullWidth
        variant="filled"
        InputLabelProps={{
          color: "secondary",
        }}
        label="SEARCH"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
  );
};
export default Search;
