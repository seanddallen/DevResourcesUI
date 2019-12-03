import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "10px",
    width: "800px"
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px"
            }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
        }
        title="Resource Title"
        subheader={
          <a href="http://www.google.com" target="_blank">
            Resource Link
          </a>
        }
      />
    </Card>
  );
}
