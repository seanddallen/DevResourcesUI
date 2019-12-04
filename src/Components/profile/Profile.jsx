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

import ProfileCard from "./ProfileCard";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "20px",
    width: "800px"
  }
}));

export default function Profile() {
  const classes = useStyles();

  const favorites = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const listOfFavorites = favorites.map(favorite => {
    return <ProfileCard favorite={favorite} />;
  });

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
        <h3>USER DETAILS</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100vw"
          }}
        >
          <div id="user-details">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div>Sean</div>
              <IconButton>
                <EditIcon />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div>Tayler</div>
              <IconButton>
                <EditIcon />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div>seanjtayler@gmail.com</div>
              <IconButton>
                <EditIcon />
              </IconButton>
            </div>
          </div>
          <div id="developer-details">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div>Bootcamp</div>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div>Employed - Mid</div>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div>1-2 Years</div>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div>Front-End</div>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
          width: "100vw"
        }}
      >
        <h3>USER FAVORITES</h3>
        {listOfFavorites}
      </div>
    </div>
  );
}
