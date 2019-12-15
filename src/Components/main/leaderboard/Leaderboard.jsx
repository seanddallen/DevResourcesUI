// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles({
//   root: {
//     // width: "100%",
//     // overflowX: "auto"
//   },
//   table: {
//     width: 300
//   }
// });

// function createData(rank, score, user) {
//   return { rank, score, user };
// }

// const rows = [
//   createData("#1", 1200, "Sean Tayler"),
//   createData("#2", 1200, "Sean Tayler"),
//   createData("#3", 1200, "Sean Tayler"),
//   createData("#4", 1200, "Sean Tayler"),
//   createData("#5", 1200, "Sean Tayler"),
//   createData("#6", 1200, "Sean Tayler")
// ];

// export default function SimpleTable() {
//   const classes = useStyles();

//   return (
//     <Paper
//       className={classes.root}
//       style={{ width: "300px", marginRight: "0px" }}
//     >
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="left">Rank</TableCell>
//             <TableCell align="left">Score</TableCell>
//             <TableCell align="left">User</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row" align="left">
//                 {row.rank}
//               </TableCell>
//               <TableCell align="left">{row.score}</TableCell>
//               <TableCell align="left">{row.user}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

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
    // "&:hover": {
    //   boxShadow: "-1px 5px 29px 0px rgba(0,0,0,0.5)"
    // }
  },
  grow: {
    flexGrow: 1
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
            // avatar={
            //   <Avatar aria-label="recipe" className={classes.avatar}>
            //     S
            //   </Avatar>
            // }
            // title="Resource Title"
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
      {/* <div style={{ fontSize: "14px", fontWeight: "bold" }}>LEADERBOARD</div> */}
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
