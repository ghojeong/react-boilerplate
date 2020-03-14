import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { defaultTheme } from "app/themes";
import { AppRouter } from "app/routes";
import { rootEpic } from "app/epics";
import { rootReducer } from "app/reducers";
import * as services from "app/services";
import { Notifier } from "app/components";

const epicMiddleware = createEpicMiddleware({
  dependencies: services
});
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider>
        <CssBaseline />
        <Notifier />
        <AppRouter />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
);

export default hot(module)(App);
