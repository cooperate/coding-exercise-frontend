import React from "react";
import clsx from "clsx";
import logo from "./logo.svg";
import { Box, Container } from "@material-ui/core";
import Header from "./components/header/Header";
import Search from "./containers/Search";
import ColumnAddOptions from "./components/column-add-option/ColumnAddOptions";
import ColumnAddItem from "./containers/CreateItem";
import {
  createMuiTheme,
  ThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import styles from "./App.module.css";
import ColumnContainer from "./containers/Columns";
import { Provider } from "react-redux";
import configureStore from "./store";
import { loadItems } from "./actions/index";
import Logger from './containers/Log';

const store = configureStore();
store.dispatch(loadItems());

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Helvetica", "Merriweather"].join(","),
    h1: {
      fontFamily: "Merriweather",
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#C0C4C9",
    },
  },
});

const App = () => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Box className={styles.wrapper}>
          <div className={styles.container}>
            <div className={clsx(styles.gridItem, styles.gridHeader)}>
              <Header />
            </div>
            <div className={clsx(styles.gridItem, styles.gridSearch)}>
              <Search />
            </div>
            <div className={clsx(styles.gridItem, styles.gridTransferColumns)}>
              <ColumnContainer />
            </div>
            <div className={clsx(styles.gridItem, styles.gridAddOptions)}>
              <ColumnAddOptions />
            </div>
            <div className={clsx(styles.gridItem, styles.gridAddItem)}>
              <ColumnAddItem />
            </div>
            <div className={clsx(styles.gridItem, styles.gridLogger)}>
              <Logger />
            </div>
          </div>
        </Box>
      </Provider>
    </ThemeProvider>
  </StylesProvider>
);

export default App;
