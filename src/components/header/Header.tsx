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
        <Typography color="primary" variant="h1"><Box className={styles.header}>Marvelous!</Box></Typography>
        <Typography><Box color="#8EFEED">Sort and add items to two lists.</Box></Typography>
    </Box>
)
    }

export default Header;