import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormGroup,
  Typography,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: 250,
    borderRadius: 25,
    alignItems: "center",
    justifyItems: "center",
    margin: "auto",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
    },
    [theme.breakpoints.up("sm")]: {
      width: 500,
      marginTop: "8rem",
      margin: "auto",
    },
    boxShadow: "10px 20px 10px 10px rgba(136, 136, 136, 0.2)",
  },
  action: {
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      backgroudColor: theme.palette.secondary,
    },
  },
}));

export const SignIn = () => {
  const classes = useStyles();
  document.title = "NESGAA - SignIn";
  return (
    <Card className={`${classes.root}`} noValidate autoComplete="off">
      <CardHeader
        title={
          <Typography variant="h4" align="center">
            Registrarse
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2" align="center" color="textSecondary">
            Como amigo
          </Typography>
        }
      />
      <Divider light className={classes.hover} />
      <CardContent>
        <form noValidate autoComplete="off">
          <FormGroup row style={{ justifyContent: "center" }}>
            <TextField
              required
              type="email"
              id="txt-correo"
              label="Correo"
              variant="outlined"
              color="secondary"
            />
            <TextField
              required
              type="password"
              id="txt-contrasena"
              label="Contraseña"
              variant="filled"
              color="secondary"
              className={classes.input}
            />
          </FormGroup>
          <CardActions className={classes.action}>
            <Button variant="contained" color="secondary">
              Registrar
            </Button>
            <Button variant="contained" color="inherit">
              Google
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};
