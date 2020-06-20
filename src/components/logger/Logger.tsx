import React from "react";
import LoggerItem from "../logger-item/LoggerItem";
import List from "../list/List";
import Paper from "../paper/paper";
import styles from "./Logger.module.css";

const Logger = (props: any) => {
  const { log } = props;
  return (
    <Paper className={styles.log} >
      <List>
        {log.map(
          (logItem: any, index: number) =>
           (index < 10) && (
              <LoggerItem
                requestType={logItem.requestType}
                reducerAction={logItem.reducerAction}
              />
            )
        )}
      </List>
    </Paper>
  );
};

export default Logger;
