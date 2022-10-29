import React from "react";
import ReactDOM from "react-dom/client";

import "./reset.scss";

import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";

import "./global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Container />
    <Footer />
  </React.StrictMode>
);
