import "./App.css";
import React from "react";

import { BrowserRouter } from "react-router-dom";

import Nav from "../components/template/Nav";
import Header from "../components/template/Header";
import Main from "../components/template/Main";

//import Modal from "../components/template/modals/Modal"


export default props => (
  <BrowserRouter>
    <Nav />
    <Header />
    <Main />
  </BrowserRouter>
);
