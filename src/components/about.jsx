import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import theme from "../style/theme";

const useStyle = makeStyles({
  root: {
    width: "auto",
    height: 650,
    backgroundColor: theme.palette.primary.light,
  },
  media: {
    height: 400,
    width: "auto",
  },
  action: {
    justifyContent: "center",
  },
});

export const AboutCard = () => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Acerca de Nosotros"
        subheader="2020-11-11"
        action={
          <IconButton>
            <ShareIcon />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTm46iDfDB86BxsQN_jqtG0Qp61vdxaYOpz7Q&usqp=CAU"
      />
      <CardContent variant="body2" component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, minima.
        Saepe, quasi quod iste cumque ad assumenda provident. Dolorum eaque
        provident temporibus quaerat sit quos non aut rem obcaecati maiores.
      </CardContent>
      <CardActions className={classes.action}>
        <Button> Deja ayudarte! </Button>
      </CardActions>
    </Card>
  );
};
