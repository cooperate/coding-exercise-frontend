import React, { useMemo } from "react";
import { Paper, Typography, Container, Box } from "@material-ui/core";
import styles from "./Column.module.css";
import ColumnItem from "../column-item/ColumnItem";
import List from "../list/List";
import { IItem } from "../../types/index";
import Item from "../../containers/DeleteItem";

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

  const filteredItems = useMemo(
    () =>
      searchTerm.length > 0
        ? items.filter(
            (item: IItem) =>
              item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : items,
    [searchTerm, items]
  );

  return (
    <Paper className={styles.paper}>
      <Container className={styles.header}>
        <Typography color="primary" variant="h4">
          {title}
        </Typography>
      </Container>
      <List className={styles.list} component="div" role="list">
        {filteredItems.map((item: IItem, index: number) => {
          const labelId = `transfer-list-item-${item.title}-label`;
          return (
            <Item
              className={
                index % 2 == 0 ? styles.listItemEven : styles.listItemOdd
              }
              item={item}
              labelId={labelId}
            />
          );
        })}
      </List>
    </Paper>
  );
};

export default Column;
