import React from "react";
import styles from "./paper.module.css";
import { default as MaterialUIPaper } from "@material-ui/core/Paper";

const Button = (props: any) => {
  return (
    <MaterialUIPaper className={styles.paper} {...props}>
      {props.children}
    </MaterialUIPaper>
  );
};

export default Button;
