import React from "react";
import styles from "./Button.module.css";
import { default as MaterialUIButton } from "@material-ui/core/Button";

const Button = (props: any) => {
  const { title }: { title: string } = props;
  return (
    <MaterialUIButton className={styles.button} {...props}>
      {title}
    </MaterialUIButton>
  );
};

export default Button;
