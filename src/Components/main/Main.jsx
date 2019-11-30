import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Filters from "./filters/Filters";
import Cards from "./resources/ResourceCards";
import ResourceForm from "./resources/ResourceForm";

export default function Main(props) {
  const [openForm, setOpenForm] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      }}
    >
      <ResourceForm openForm={openForm} setOpenForm={setOpenForm} />
      {!openForm ? (
        <Grid container style={{ width: "100vw", marginTop: "-20px" }}>
          <Cards toggleDrawer={props.toggleDrawer} />
        </Grid>
      ) : null}
    </div>
  );
}
