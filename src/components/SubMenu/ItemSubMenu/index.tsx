import "./styles.scss";

import {
  Collapse,
  createStyles,
  List,
  makeStyles,
  Theme,
} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { StarBorder } from "@material-ui/icons";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import { ItemSubmenuType } from "./type";

export const ItemSubMenu = (props: ItemSubmenuType) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      font: {
        color: "white",
        fontSize: "1.8rem"
      },
    })
  );

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // OBS: NÃO ESTÁ COMPONENTIZADO POIS NÃO FOI TERMINADO.

  
  return (
    <ListItem button onMouseEnter={handleClick} className="item-list">
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.name} classes={{ primary: classes.font }} />
      {open ? (
        <ExpandLess className={classes.font} />
      ) : (
        <ExpandMore className={classes.font} />
      )}
      <List className="container-ItemListOpen">
        <Collapse in={open} timeout="auto" unmountOnExit className="contentItemOpen">
          <List component="div" disablePadding>
            <ListItem button className="itemOpenList">
              <ListItemIcon>
                <StarBorder className="iconItemOpenList" />
              </ListItemIcon>
              <ListItemText primary="Celular LG" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit className="contentItemOpen">
          <List component="div" disablePadding>
            <ListItem button className="itemOpenList">
              <ListItemIcon>
                <StarBorder className="iconItemOpenList" />
              </ListItemIcon>
              <ListItemText primary="Celular LG" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit className="contentItemOpen">
          <List component="div" disablePadding>
            <ListItem button className="itemOpenList">
              <ListItemIcon>
                <StarBorder className="iconItemOpenList" />
              </ListItemIcon>
              <ListItemText primary="Celular LG" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit className="contentItemOpen">
          <List component="div" disablePadding>
            <ListItem button className="itemOpenList">
              <ListItemIcon>
                <StarBorder className="iconItemOpenList" />
              </ListItemIcon>
              <ListItemText primary="Celular LG" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit className="contentItemOpen">
          <List component="div" disablePadding>
            <ListItem button className="itemOpenList">
              <ListItemIcon>
                <StarBorder className="iconItemOpenList" />
              </ListItemIcon>
              <ListItemText primary="Celular LG" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </ListItem>
  );
};
