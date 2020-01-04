import React from "react";
import { useSelector } from 'react-redux';
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import faker from "faker";

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
  const resources = useSelector(state => state.resources);

  const listOfCards = resources.map((card, i) => {
    return (
      <ResourceCard
        key={i}
        toggleDrawer={props.toggleDrawer}
        card={card}
        image={faker.image.abstract()}
      />
    );
  });

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        marginBottom: "0px"
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "-10px"
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
