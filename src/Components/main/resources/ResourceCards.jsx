import React from "react";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import { VariableSizeList as List } from "react-window";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { IconButton, Card, fade, makeStyles } from "@material-ui/core";
import faker from "faker";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

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

// LazyLoading
const Loading = () => (
  <div className="post loading">
    <Card
      style={{
        minHeight: "200px",
        width: "800px",
        marginTop: "15px"
      }}
    >
      Loading...
    </Card>
  </div>
);

// React-Window
const rowHeights = new Array(200).fill(true).map(() => 500);

const getItemSize = index => rowHeights[index];

export default function ResourceCards(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const resources = useSelector(state => state.resources);

  //Sort
  const handleSortNewest = () => {
    resources.sort((a, b) => {
      return ("" + b.creation_year).localeCompare(a.creation_year);
    });
    setAnchorEl(null);
  };

  const handleSortShares = () => {
    resources.sort((a, b) => {
      return b.shares - a.shares;
    });
    setAnchorEl(null);
  };

  const handleSortHighestReviews = reviews => {
    resources.sort((a, b) => {
      return b.reviews.length - a.reviews.length;
    });
    setAnchorEl(null);
  };

  //still need to access vote scores, not correct yet
  const handleSortHighestRating = rating => {
    resources.sort((a, b) => {
      return b.votes.length - a.votes.length;
    });
    setAnchorEl(null);
  };

  //end Sort

  //search cards - populate cards
  const listOfCards = search
    ? resources
        .filter(resource =>
          resource.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((card, i) => {
          return (
            <LazyLoad key={i} once={true} placeholder={<Loading />}>
              <ResourceCard
                toggleDrawer={props.toggleDrawer}
                key={i}
                card={card}
                image={faker.image.abstract()}
              />
            </LazyLoad>
          );
        })
    : resources.map((card, i) => {
        return (
          <LazyLoad key={i} once={true} placeholder={<Loading />}>
            <ResourceCard
              toggleDrawer={props.toggleDrawer}
              key={i}
              card={card}
              image={faker.image.abstract()}
            />
          </LazyLoad>
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
          <div>
            {`1 -${listOfCards.length} of ${listOfCards.length} RESULTS`}
          </div>
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
              <MenuItem onClick={() => handleSortHighestRating()}>
                Highest Rating
              </MenuItem>
              <MenuItem onClick={() => handleSortHighestReviews()}>
                Most Reviews
              </MenuItem>
              <MenuItem onClick={() => handleSortShares()}>
                Most Shares
              </MenuItem>
              <MenuItem onClick={() => handleSortNewest()}>Newest</MenuItem>
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
              color="primary"
              label="Search by Title"
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
