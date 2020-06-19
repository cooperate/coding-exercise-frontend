import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, MenuItem, Select, InputLabel, Typography } from "@material-ui/core";
import styles from "./ColumnSelector.module.css";

const ColumnSelector = ({ items, setColumn }: { items: any, setColumn: any }) => {
  const [columnName, setColumnName] = useState("");

  const handleChange = (event: any) => {
    setColumnName(event.target.value);
  };

  useEffect(()=> {
    setColumn(columnName === "one" ? 1 : 2);
  }, [columnName]);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <InputLabel id="demo-simple-select-label"><Typography color="secondary">CHOOSE COLUMN</Typography></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color="primary"
          value={columnName}
          onChange={handleChange}
        >
          {items.map((item: any) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
        
      </FormControl>
    </div>
  );
};

export default ColumnSelector;
