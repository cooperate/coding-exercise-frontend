import React from "react";
import styles from "./Button.module.css";
import Box from "@material-ui/core/Box";
import { default as MaterialUIButton } from "@material-ui/core/Button";

const Button = (props: any) => {
  const { title }: { title: string } = props;
  return (
    <MaterialUIButton className={styles.button} {...props}>
      <Box fontSize="1.8rem">{title}</Box>
    </MaterialUIButton>
  );
};

export default Button;
