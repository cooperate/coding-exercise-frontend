import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { IItem } from "../../types/index";
import Column from "../../containers/ColumnSearchFilter";
import styles from "./TransferColumns.module.css";

const TransferColumns = (props: any) => {
  const { items } = props;
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  useEffect(() => {
    setLeft(items.filter((item: IItem) => item.column == 1));
    setRight(items.filter((item: IItem) => item.column == 2));
  }, [items]);
  return (
    <div className={styles.columns}>
      <div>
        <Column title="COLUMN 1" items={left} />
      </div>
      <div>
        <Column title="COLUMN 2" items={right} />
      </div>
    </div>
  );
};

export default TransferColumns;
