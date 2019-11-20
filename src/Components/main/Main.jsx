import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Filters from "./filters/Filters";

class Main extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Grid container style={{ width: "30vw", margin: "10px" }}>
          <Filters />
        </Grid>
        <Grid container style={{ width: "70vw", margin: "10px" }}>
          CARDS
        </Grid>
      </div>
    );
  }
}

export default Main;
