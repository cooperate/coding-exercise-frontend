import React from "react";
import styles from "./List.module.css";
import { default as MaterialUIList } from "@material-ui/core/List";

const List = (props: any) => (
  <MaterialUIList className={styles.list} {...props}>
    {props.children}
  </MaterialUIList>
);

export default List;
