import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import ReduxThunk from "redux-thunk"

import reducers from "./redux/reducers"
import App from "./App";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById("root"));
