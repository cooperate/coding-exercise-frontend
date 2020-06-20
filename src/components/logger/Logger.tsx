import React from 'react';
import List from '@material-ui/core/List';
import LoggerItem from '../logger-item/LoggerItem';

const Logger = (props: any) => {
    const { log } = props;
    return (
        <List>
            {log.map((logItem: any) => <LoggerItem message={logItem.requestType} />)}
        </List>
    );
}

export default Logger;