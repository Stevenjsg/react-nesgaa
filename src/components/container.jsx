import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
  },
  subgrid: {
    marginTop: 10,
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
    },
  },
}));

export const Container = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.grid}>
      <Grid item container>
        <Grid item sm={2} />
        <Grid item xs={12} sm={8} className={classes.subgrid}>
          {/* Cuerpo del programa */}
          {props.children}
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </Grid>
  );
};
