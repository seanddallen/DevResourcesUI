import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import faker from "faker";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ResourceCard from "./ResourceCard";

const useStyles = makeStyles(theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }
  // expandOpen: {
  //   transform: "rotate(180deg)"
  // }
}));

export default function ResourceCards(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const resources = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSortRating = () => {
    resources.sort(function(a, b) {
      return a - b;
    });
  };
  const handleSortReviews = () => {
    resources.sort(function(a, b) {
      return a - b;
    });
  };
  const handleSortVotes = () => {
    resources.sort(function(a, b) {
      return a - b;
    });
  };
  const handleSortNewest = () => {
    resources.sort(function(a, b) {
      return a - b;
    });
  };
  const handleSortCosts = () => {
    resources.sort(function(a, b) {
      return a - b;
    });
  };
  //search cards
  const listOfCards = search
    ? resources
        .filter(resource => resource == search)
        .map((card, i) => {
          return (
            <ResourceCard
              toggleDrawer={props.toggleDrawer}
              key={i}
              card={card}
              image={faker.image.abstract()}
            />
          );
        })
    : resources.map((card, i) => {
        return (
          <ResourceCard
            toggleDrawer={props.toggleDrawer}
            key={i}
            card={card}
            image={faker.image.abstract()}
          />
        );
      });
  //end search

  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        marginBottom: "0px"
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "-10px"
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "space-around",
            alignItems: "center"
            // marginBottom: "-10px"
          }}
        >
          <div>1-9 of 9 RESULTS</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "40px"
            }}
          >
            SORT RESOURCES
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Highest Rating</MenuItem>
              <MenuItem onClick={handleClose}>Most Reviews</MenuItem>
              <MenuItem onClick={handleClose}>Most Votes</MenuItem>
              <MenuItem onClick={handleClose}>Newest</MenuItem>
              <MenuItem onClick={handleClose}>Cost</MenuItem>
            </Menu>
          </div>
        </div>
        <div
          className={classes.search}
          style={{
            display: "flex",
            // justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "0px"
          }}
        >
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className={classes.margin}
              variant="outlined"
              color="primary"
              label="Search by Keyword"
              style={{ width: "200px" }}
              name="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </form>
        </div>
      </Grid>
      {listOfCards}
    </Grid>
  );
}
