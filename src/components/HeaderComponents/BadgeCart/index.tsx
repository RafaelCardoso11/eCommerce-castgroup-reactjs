import "./styles.scss";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    borderRadius: "50%",
  },
  badge: {
    fontSize: "1.8rem",
    color: "white",
    backgroundColor: "red",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  },
}));

const BadgeCart = (props: any) => {
  const classes = useStyles();
  const { quantityItemCarState } = useContext(GlobalContext);
  return (
    <Link to="/carrinho">
      <MenuItem
        className="container-badgeCart"
        classes={{
          root: classes.menuItem,
        }}
      >
        <Badge
          badgeContent={quantityItemCarState}
          className="Badge"
          classes={{
            badge: classes.badge,
          }}
        >
          <ShoppingCartIcon className={"Icon " + props.color} />
        </Badge>
      </MenuItem>
    </Link>
  );
};

export default BadgeCart;
