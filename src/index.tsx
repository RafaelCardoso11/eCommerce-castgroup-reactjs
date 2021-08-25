import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import "./global/index.scss";
import { CarShop } from "./templates/CarShop";
import { Home } from "./templates/Home";
import { InfoProduct } from "./templates/InfoProduct";
import { Global } from "../src/context";
import { Header } from "./components/HeaderComponents/Header";
import { Footer } from "./components/FooterComponents/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={InfoProduct} exact />
          <Route path="/carrinho" component={CarShop} exact />
        </Switch>
        <Footer />
      </Global>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
