import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "20px",
    width: "800px"
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
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
      <hr></hr>
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
      </div>
    </div>
  );
}
