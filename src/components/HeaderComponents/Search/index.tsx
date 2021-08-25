import "./styles.scss";

import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "3rem",
  },
  search: {
    position: "relative",
    borderRadius: "10px",
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    "&.active": {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.9),
      },
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    borderBottom: "5px solid #61ACDF",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    color: "rgb(122, 120, 120)",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "65ch",
      },
    },
    fontSize: "2rem",
  },
}));
export const Search = (props: any) => {
  
  const classes = useStyles();
  return (
    <div className={classes.search + " " +  props.color}>
      <div className={classes.searchIcon}>
        <SearchIcon className={classes.root + " " +  props.color} />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};
