import React from "react";
import Grid from "@material-ui/core/Grid";

import ResourceCard from "./ResourceCard";

export default function ResourceCards() {
  //   const classes = useStyles();

  const resources = [1, 2, 3, 4, 5, 6];

  const listOfCards = resources.map(resource => {
    return <ResourceCard />;
  });

  return (
    <Grid container style={{ display: "flex", justifyContent: "center" }}>
      {listOfCards}
    </Grid>
  );
}
