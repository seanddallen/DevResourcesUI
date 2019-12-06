import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";

// import ProfileCard from "./ProfileCard";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "20px",
    width: "800px"
  }
}));

export default function Profile() {
  const classes = useStyles();

  //   const rankings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //   const listOfRankings = rankings.map(ranking => {
  //     return <RankingCard ranking={ranking} />;
  //   });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "0px",
        width: "100vw"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
          width: "100vw"
        }}
      >
        <h3>RANKINGS</h3>
      </div>
    </div>
  );
}
