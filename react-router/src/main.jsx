// import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
//   <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
//   </StrictMode>
);
