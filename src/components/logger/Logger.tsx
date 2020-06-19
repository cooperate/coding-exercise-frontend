import React from 'react';
import List from '@material-ui/core/List';
import LoggerItem from '../logger-item/LoggerItem';

const Logger = () => {
    return (
        <List>
            <LoggerItem message="wow" />
        </List>
    );
}

export default Logger;