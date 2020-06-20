import React, { useMemo } from "react";
import { Paper, Typography, Container, Box } from "@material-ui/core";
import styles from "./Column.module.css";
import ColumnItem from "../column-item/ColumnItem";
import List from "../list/List";
import { IItem } from "../../types/index";
import DeleteItem from "../../containers/DeleteItem";

const Column = (props: any) => {
  const {
    title,
    items,
    searchTerm,
  }: {
    title: string;
    items: any;
    searchTerm: string;
  } = props;
  
  const filteredItems = useMemo(() => (
    searchTerm.length > 0
      ? items.filter(
          (item: IItem) =>
            item.message.includes(searchTerm) || item.title.includes(searchTerm)
        )
      : items
  ), [searchTerm, items]);

  return (
    <Paper className={styles.paper}>
      <Container className={styles.header}>
        <Typography color="primary" variant="h6">
          {title}
        </Typography>
      </Container>
      <List dense component="div" role="list">
        {filteredItems.map((item: IItem) => {
          const labelId = `transfer-list-item-${item.title}-label`;
          return <DeleteItem item={item} labelId={labelId} />;
        })}
      </List>
    </Paper>
  );
};

export default Column;
