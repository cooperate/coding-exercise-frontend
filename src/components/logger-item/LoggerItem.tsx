import React from "react";
import { ListItemText } from "@material-ui/core";
import ListItem from '../list-item/ListItem';

const LoggerItem = ({
  requestType,
  reducerAction,
}: {
  requestType: string;
  reducerAction: string;
}) => (
  <ListItem>
    <ListItemText>{requestType}</ListItemText>
    <ListItemText>{reducerAction}</ListItemText>
  </ListItem>
);

export default LoggerItem;
