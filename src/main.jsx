import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// axios
axios.defaults.baseURL = "https://nt-devconnector.onrender.com/api";
axios.defaults.headers.common["Content-Type"] = "application/json";
let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["x-auth-token"] = `${token}`;

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/js/src/offcanvas'

// Redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer theme="colored" />
  </Router>
);
