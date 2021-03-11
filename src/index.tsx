import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import ReduxThunk from "redux-thunk"
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import reducers from "./redux/reducers"
import App from "./App";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     // main: "#ffffff"
  //   },
  //   secondary: {
  //     light: 
  //   }
  // }
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
, document.getElementById("root"));
