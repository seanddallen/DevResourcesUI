import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Trophy from "@material-ui/icons/EmojiEvents";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "20px",
    width: "800px"
  },
  background: {
    // backgroundColor: theme.palette.grey.light
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
        width: "100vw",
        height: "100vh"
        // backgroundColor: "#C7C7C7"
      }}
      className={classes.background}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          width: "80vw"
        }}
      >
        <div style={{ width: "100%" }}>
          <h3>RANKINGS</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "40px",
              padding: "20px",
              width: "400px",
              border: "2px solid grey",
              borderRadius: "5px"
            }}
          >
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <Trophy style={{ color: "#e5e4e2", marginRight: "10px" }} />
              <div>
                <div>
                  <b>PLATINUM</b>
                </div>
                <div>Leading Contributer - Top 25 Rank</div>
                <div>**Displayed on Leaderboard**</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <Trophy style={{ color: "gold", marginRight: "10px" }} />
              <div>
                <div>
                  <b>GOLD</b>
                </div>
                <div>Elite Contributor - 1000 points</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <Trophy style={{ color: "grey", marginRight: "10px" }} />
              <div>
                <div>
                  <b>SILVER</b>
                </div>
                <div>Superior Contributor - 500 points</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <Trophy
                style={{
                  color: "#cd7f32",
                  marginRight: "10px",
                  textShadow: "5px 5px 15px red"
                }}
              />
              <div>
                <div>
                  <b>BRONZE</b>
                </div>
                <div>Basic Contributor - 100 points</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <Trophy style={{ color: "black", marginRight: "10px" }} />
              <div>
                <div>
                  <b>MEMBER</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%"
          }}
        >
          <h3>POINT SYSTEM</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "40px",
              padding: "20px",
              width: "400px",
              border: "2px solid grey",
              borderRadius: "5px"
            }}
          >
            <div style={{ display: "flex", marginBottom: "20px" }}>
              {/* <Trophy style={{ color: "#e5e4e2", marginRight: "10px" }} /> */}
              <div>
                <div>
                  <b>Submit Resource Approved</b>
                </div>
                <div>+ 20 points</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              {/* <Trophy style={{ color: "#e5e4e2", marginRight: "10px" }} /> */}
              <div>
                <div>
                  <b>Submit Review Approved (Detailed)</b>
                </div>
                <div>+ 10 points</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              {/* <Trophy style={{ color: "#e5e4e2", marginRight: "10px" }} /> */}
              <div>
                <div>
                  <b>Submit Review Approved (Basic)</b>
                </div>
                <div>+ 5 points</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              {/* <Trophy style={{ color: "#e5e4e2", marginRight: "10px" }} /> */}
              <div>
                <div>
                  <b>Edit Resource Approved</b>
                </div>
                <div>+ 5 points</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              {/* <Trophy style={{ color: "#e5e4e2", marginRight: "10px" }} /> */}
              <div>
                <div>
                  <b>Share Resource</b>
                </div>
                <div>+ 5 points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
