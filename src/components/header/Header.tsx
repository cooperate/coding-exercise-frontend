import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from "./Header.module.css";
import { useSelector } from 'react-redux';
const Header = () => {
    const wow = useSelector((state: any) => state.items);
    useEffect(() => {
    }, []);
    return (
    <Box>
        <Box className={styles.header}><Typography color="primary" variant="h1">Marvelous!</Typography></Box>
        <Box color="#8EFEED"><Typography>Sort and add items to two lists.</Typography></Box>
    </Box>
)
    }

export default Header;