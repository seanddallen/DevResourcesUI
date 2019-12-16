import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import faker from "faker";

import ProfileCard from "./ProfileCard";
import ProfileEdit from "./ProfileEdit";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "20px",
    width: "800px"
  },
  fabColor: {
    backgroundColor: theme.palette.tertiary.main,
    "&:hover": {
      backgroundColor: theme.palette.tertiary.main
    }
  }
}));

export default function Profile() {
  const classes = useStyles();

  const [openForm, setOpenForm] = React.useState(false);

  const favorites = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const listOfFavorites = favorites.map(favorite => {
    return <ProfileCard favorite={favorite} />;
  });

  return (
    <>
      {openForm ? (
        <ProfileEdit openForm={openForm} setOpenForm={setOpenForm} />
      ) : (
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100vw"
              }}
            >
              <div id="developer-img">
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <img
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "6px",
                        marginRight: "40px",
                        marginTop: "10px"
                      }}
                      src={faker.image.avatar()}
                    />
                  </div>
                </div>
              </div>
              <div id="user-details">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                >
                  <div>Sean Tayler</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    marginTop: "10px"
                  }}
                >
                  <div>username: devSean</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                >
                  <div>Education: Bootcamp</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                >
                  <div>Employment: Mid Level</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                >
                  <div>Experience: 2-5 years</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                >
                  <div>Specialty: Front-End</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                >
                  <div>
                    Personal URL:
                    <Link to="www.devresources.io"> www.devresources.io</Link>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                >
                  <div>
                    Github URL:
                    <Link to="www.devresources.io">
                      {" "}
                      https://github.com/seantayler
                    </Link>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                >
                  <div>
                    LinkedIn URL:
                    <Link to="www.devresources.io">
                      {" "}
                      https://www.linkedin.com/in/seantayler/
                    </Link>
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
            <div style={{ width: "650px" }}>
              This is my bio... This is my bio... This is my bio... This is my
              bio... This is my bio... This is my bio... This is my bio... This
              is my bio... This is my bio... This is my bio... This is my bio...
              This is my bio... This is my bio... This is my bio... This is my
              bio... This is my bio... This is my bio... This is my bio... This
              is my bio... This is my bio...{" "}
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
            <h3>FAVORITES LIST</h3>
            {listOfFavorites}
          </div>
          <Fab
            className={classes.fabColor}
            aria-label="add"
            style={{ position: "fixed", bottom: 30, right: 30 }}
            onClick={() => setOpenForm(!openForm)}
          >
            <EditIcon />
          </Fab>
        </div>
      )}
    </>
  );
}
