import "./styles.scss";

import List from "@material-ui/core/List";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import StarBorder from "@material-ui/icons/StarBorder";
import { Smartphone } from "@material-ui/icons";
import { ItemSubMenu } from "../ItemSubMenu";

export function ListSubMenu() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      listStyle: {
        display: "grid",
        gridTemplateColumns: "repeat(5, minmax(150px, 1fr))",
        width: "100%",
        justifyItems: "center",
        gridGap: "0px 50px",
        padding: "10px 0px",
        color: "white",
      },
      font: {
        color: "white",
        fontSize: "1.8rem",
      },
    })
  );
  const classes = useStyles();
  return (
    <div className="content-list">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.listStyle}
      >
        <ItemSubMenu
          icon={<Smartphone className="iconSubmenu" />}
          name="Smartphones"
        />
        <ItemSubMenu
          icon={<StarBorder className="iconSubmenu" />}
          name="Tablets"
        />
        <ItemSubMenu
          icon={<Smartphone className="iconSubmenu" />}
          name="Notebook"
        />
        <ItemSubMenu
          icon={<StarBorder className="iconSubmenu" />}
          name="Acessórios"
        />
        <ItemSubMenu
          icon={<StarBorder className="iconSubmenu" />}
          name="Fones"
        />
      </List>
    </div>
  );
}
