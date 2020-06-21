import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, MenuItem, Select, InputLabel, Typography, Box } from "@material-ui/core";
import styles from "./ColumnSelector.module.css";

const ColumnSelector = ({ items, setColumn }: { items: any, setColumn: any }) => {
  const [columnName, setColumnName] = useState("one");

  const handleChange = (event: any) => {
    setColumnName(event.target.value);
  };

  useEffect(()=> {
    setColumn(columnName === "one" ? 1 : 2);
  }, [columnName]);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <InputLabel id="column-selector">CHOOSE COLUMN</InputLabel>
        <Select
          labelId="column-selector"
          color="primary"
          value={columnName}
          onChange={handleChange}
          variant="filled"
        >
          {items.map((item: any, index: number) => (
            <MenuItem key={index} value={item}><Box color="white" fontSize="1.8rem">{item}</Box></MenuItem>
          ))}
        </Select>
        
      </FormControl>
    </div>
  );
};

export default ColumnSelector;
