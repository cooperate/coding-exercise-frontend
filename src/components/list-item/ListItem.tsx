import React from "react";
import styles from "./ListItem.module.css";
import { default as MaterialUIListItem } from "@material-ui/core/ListItem";

const ListItem = (props: any) => (
  <MaterialUIListItem className={styles.listItem} {...props}>
    {props.children}
  </MaterialUIListItem>
);

export default ListItem;
