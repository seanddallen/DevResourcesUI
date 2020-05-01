import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import faker from "faker";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "10px",
    width: "300px"
  },
  grow: {
    flexGrow: 1
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "5px"
  }
}));

export default function ResourceCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const leaders = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25
  ];

  const listOfLeaders = leaders.map(leader => {
    return (
      <>
        <Grid style={{ marginTop: "-5px", marginBottom: "-5px" }}>
          <CardHeader
            subheader={
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    marginRight: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      marginRight: "10px"
                    }}
                  >
                    <h3>{`#${leader}`}</h3>
                  </div>
                  <div>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {
                        <img
                          style={{ height: "40px", width: "40px" }}
                          src={faker.image.avatar()}
                        />
                      }
                    </Avatar>
                  </div>
                </div>
                <div>
                  <h4 style={{ margin: "0" }}>Sean Tayler</h4>
                  <div style={{ fontSize: "12px", marginBottom: "-5px" }}>
                    SCORE: 1200
                  </div>
                  <a
                    href="http://www.google.com"
                    target="_blank"
                    style={{ fontSize: "12px" }}
                  >
                    devresources.io
                  </a>
                </div>
              </div>
            }
          />
        </Grid>
        <Divider variant="middle" />
      </>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        margin: "10px -20px 0px 50px"
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "0px"
        }}
      >
        <div>Top 25 Leaderboard</div>
      </Grid>
      <Card
        className={classes.card}
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          marginTop: "20px"
        }}
      >
        {listOfLeaders}
      </Card>
    </div>
  );
}
