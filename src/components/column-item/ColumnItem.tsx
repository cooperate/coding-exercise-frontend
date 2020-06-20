import React from "react";
import {
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "../list-item/ListItem";
import { IItem } from "../../types/index";
import styles from "./ColumnItem.module.css";

const ColumnItem = (props: any) => {
  const {
    item,
    labelId,
  }: {
    item: IItem;
    labelId: string;
  } = props;

  const handleDelete = () => {
    props.deleteItem(item);
  };

  return (
    <ListItem className={props.className} key={item._id} role="listitem" button>
      <ListItemText id={labelId}>{item.title}</ListItemText>
      <ListItemText id={labelId}>{item.message}</ListItemText>
      <ListItemSecondaryAction>
        <Button onClick={handleDelete}>
          <ClearIcon />
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ColumnItem;
