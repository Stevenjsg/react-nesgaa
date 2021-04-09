import React from "react";
import {
  makeStyles,
  IconButton,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import Skeleton from "react-loading-skeleton";
import db from "../services/database";

const useStyle = makeStyles({
  root: {
    maxWidth: "100%",
    marginTop: 5,
  },
  media: {
    height: "auto",
    width: "100%",
    justifyContent: "center",
  },
  content: {
    textAlign: "justify",
  },
  title: {
    flexGrow: 1,
  },
});

export const AboutCard = () => {
  const [posts, setPosts] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    db.on("value", function (snapshot) {
      setPosts(snapshot.val());
      setLoading(false);
    });
  }, []);

  const classes = useStyle();
  if (loading) {
    return loadAbout();
  } else {
    return (
      <div className={classes.root}>
        <Grid container alignItems="center" justify="center">
          <Grid item container md={12} alignContent="space-between">
            <Typography
              variant="h5"
              component={"span"}
              className={classes.title}
            >
              {posts.titulo}
              <Typography variant="subtitle2">{posts.fecha}</Typography>
            </Typography>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src={posts.imagenUrl}
              alt="terapia-grupo-psicologo-sentado-ayuda-mentor-sesion-nesgaa"
              className={classes.media}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography className={classes.content}>
              {posts.contenido}
            </Typography>
          </Grid>
          <Grid item container md={12} alignItems="center" justify="center">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              A por ello
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
};
const loadAbout = () => (
  <div style={{ marginTop: 25 }}>
    <Grid container spacing={3} alignItems="center" justify="center">
      <Grid item container sm={12} alignContent="space-between">
        <Skeleton count={1} />
      </Grid>
      <Grid item sm={6}>
        <Skeleton count={1} height={200} />
      </Grid>
      <Grid item sm={6}>
        <Skeleton count={9} />
      </Grid>
      <Grid item container sm={12} alignItems="center" justify="center">
        <Skeleton width={100} />
      </Grid>
    </Grid>
  </div>
);
