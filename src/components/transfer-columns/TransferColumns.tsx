import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { IItem } from "../../types/index";
import Column from "../column/Column";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 200,
    height: 230,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a: any, b: any) {
  return a.filter((value: any) => b.indexOf(value) === -1);
}

function intersection(a: any, b: any) {
  return a.filter((value: any) => b.indexOf(value) !== -1);
}

const TransferColumns = (props: any) => {
  const { items } = props;
  const classes = useStyles();
  console.log(
    "items",
    items.filter((item: IItem) => item.column == 1)
  );
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  useEffect(() => {
    setLeft(items.filter((item: IItem) => item.column == 1));
    setRight(items.filter((item: IItem) => item.column == 2));
  }, [items]);
  return (
    <Grid
      container
      style={{ height: "100%", width: "100%" }}
      spacing={1}
      justify="center"
      alignItems="center"
    >
      <Grid style={{ height: "100%" }} xs={12} sm={6} item>
        {<Column title="COLUMN 1" items={left} />}
      </Grid>
      <Grid style={{ height: "100%" }} xs={12} sm={6} item>
        {<Column title="COLUMN 2" items={right} />}
      </Grid>
    </Grid>
  );
};

export default TransferColumns;
