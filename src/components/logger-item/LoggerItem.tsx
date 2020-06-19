import React from 'react';
import ListItem from '@material-ui/core/ListItem';

const LoggerItem = ({message}: {message: string}) => (
    <ListItem>{message}</ListItem>
)

export default LoggerItem;