import React from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import theme from "../style/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: theme.spacing(2),
    fontStyle: "italic",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  console.log(theme.palette.secondary.light);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.root}>
            No estás solo grupo de ayuda anónima
            <Typography
              variant="overline"
              component="span"
              className={classes.title}
              color="textSecondary"
            >
              NESGAA
            </Typography>
          </Typography>

          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
