import { Component } from "react";

import "./styles.scss";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";

import { Link } from "react-router-dom";
import { ItemMenu } from "../ItemMenu";

export const HeaderMenu = (props: any) => {
  return (
    <section className="Menu">
      <div className="list-items">
        <Link to="/">
          <ItemMenu
            icon={<HomeIcon className="Icon" />}
            name="Inicio"
            color={props.color}
          />
        </Link>
        <a href="#products">
          <ItemMenu
            icon={<StorefrontIcon className="Icon" />}
            name="Produtos"
            color={props.color}
          ></ItemMenu>
        </a>
      </div>
    </section>
  );
};
