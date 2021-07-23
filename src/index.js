import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";

import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
import "../node_modules/reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css";
import "https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js";

import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";

import { BrowserRouter } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
