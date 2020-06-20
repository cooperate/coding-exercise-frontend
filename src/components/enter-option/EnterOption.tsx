import React, { useState } from "react";
import { FormControl, InputLabel, Typography } from "@material-ui/core";
import styles from "./EnterItem.module.css";
import Input from "../input/Input";

const EnterOption = ({label, setValue}: {label: string, setValue: any}) => (
  <Input
    fullWidth
    variant="filled"
    InputLabelProps={{
      color: "secondary",
    }}
    label={label}
    onChange={(e: any)=>setValue(e.target.value)}
  />
);

export default EnterOption;
