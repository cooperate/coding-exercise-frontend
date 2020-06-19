import React from 'react';
import styles from "./Input.module.css";
import { default as MaterialUITextField } from '@material-ui/core/TextField';

const Input = (props: any) => (
    <MaterialUITextField className={styles.input} color="primary" {...props}>{props.children}</MaterialUITextField>
);

export default Input;