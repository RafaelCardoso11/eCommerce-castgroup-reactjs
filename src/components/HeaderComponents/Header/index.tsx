import { Component } from "react";
import "./styles.scss";

import logo from "../../../assets/header/logo-castgroup.png";

import { AppBar, Toolbar } from "@material-ui/core";
import { HeaderMenu } from "../HeaderMenu";
import { Search } from "../Search";
import { Link } from "react-router-dom";
import BadgeCart from "../BadgeCart";

export class Header extends Component {
  state = {
    backgroundColor: "",
    color: "",
  };
  changeBackgroud: EventListener = (event: Event) => {
    if (window.scrollY >= 80) {
      this.setState({ backgroundColor: "active" });
      this.setState({ color: "active" });
    } else {
      this.setState({ backgroundColor: "" });
      this.setState({ color: "" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeBackgroud);
  }

  render() {
    let { backgroundColor, color } = this.state;
    return (
      <AppBar className="Header" position="fixed">
        <Toolbar className={"content-header " + backgroundColor}>
          <Link to="/">
            <img src={logo} alt="logo-castgroup" className="logo" />
          </Link>
          <div className="search">
            <Search color={color} />
          </div>
          <div className="headerMenu">
            <HeaderMenu color={color} />
          </div>
          <BadgeCart color={color} />
        </Toolbar>
      </AppBar>
    );
  }
}
