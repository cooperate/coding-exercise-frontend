import React, { useState, useEffect } from "react";
import ColumnSelector from "../column-selector/ColumnSelector";
import { List } from "@material-ui/core";
import EnterOption from "../enter-option/EnterOption";
import { connect } from "react-redux";
import { updateItemProperties } from "../../actions";
import styles from "./ColumnAddOptions.module.css";

const ColumnAddOptions = (props: any) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [column, setColumn] = useState(1);
  const { updateItemProperties } = props;
  useEffect(() => {
    console.log("title", title);
    console.log("title", message);
    console.log("title", column);
    updateItemProperties({
      title,
      message,
      column,
    });
  }, [title, message, column]);
  return (
    <div className={styles.grid}>
      <EnterOption setValue={setTitle} label="ENTER ITEM TITLE" />
      <EnterOption setValue={setMessage} label="ENTER ITEM MESSAGE" />
      <ColumnSelector setColumn={setColumn} items={["one", "two"]} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  updateItemProperties: (itemProperties: any) =>
    dispatch(updateItemProperties(itemProperties)),
});

export default connect(null, mapDispatchToProps)(ColumnAddOptions);
