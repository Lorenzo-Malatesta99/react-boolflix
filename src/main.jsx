import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MovieProvider } from "./context/MovieContext";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <MovieProvider>
    <App />
  </MovieProvider>,
  document.getElementById("root")
);
