import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Filters from "./filters/Filters";
import Cards from "./resources/ResourceCards";

class Main extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Grid container style={{ width: "30vw", margin: "10px" }}>
          <Filters />
        </Grid> */}
        <Grid container style={{ width: "100vw", margin: "10px" }}>
          <Cards />
        </Grid>
      </div>
    );
  }
}

export default Main;
