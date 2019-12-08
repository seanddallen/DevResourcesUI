import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

import ResourceCard from "./ResourceCard";

const useStyles = makeStyles(theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }
  // expandOpen: {
  //   transform: "rotate(180deg)"
  // }
}));

export default function ResourceCards(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const resources = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const listOfCards = resources.map(card => {
    return <ResourceCard toggleDrawer={props.toggleDrawer} card={card} />;
  });

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "-10px"
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>1-9 of 9 RESULTS</div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "40px" }}
        >
          SORT BY REVIEWS
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </Grid>
      {listOfCards}
    </Grid>
  );
}
