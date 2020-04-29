// TODO: user can only vote once and if they change their vote the other vote total decreases by one

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDownAlt";
import Rating from "@material-ui/lab/Rating";
import EditIcon from "@material-ui/icons/Edit";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  Fab,
  makeStyles
} from "@material-ui/core";

import { addResourceVote } from "../../../Store/votes/resourceVotesActions";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "10px",
    width: "800px",
    minHeight: "200px",
    "&:hover": {
      boxShadow: "-1px 5px 29px 0px rgba(0,0,0,0.5)"
    }
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
    backgroundColor: red[500]
  },
  fabColor: {
    backgroundColor: theme.palette.tertiary.main,
    "&:hover": {
      backgroundColor: theme.palette.tertiary.main
    }
  }
}));

export default function ResourceCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [hover, setHover] = React.useState(false);

  // RESOURCE REVIEWS
  const allReviews = useSelector(state => state.reviews.all);
  const reviews = props.resource && allReviews.filter(review => review.resource_id === props.resource.id);

  const toggleHoverState = () => {
    setHover(!hover);
  };

  // RESOURCE VOTES
  const allVotes = useSelector(state => state.votes)
  const votes = props.resource && allVotes.filter(vote => vote.resource_id === props.resource.id)

  const handleVote = (type) => {
    dispatch(addResourceVote({ user_id: 1, resource_id: props.resource.id, type: type }));
  };

  const getUpVotes = () => {
    let upVotes = 0;

    votes && votes.map(vote => {
      if (vote.type === "up") {
        upVotes++
      }
    })
    return upVotes
  }
  const upVotes = getUpVotes()

  const getDownVotes = () => {
    let downVotes = 0;

    votes && votes.map(vote => {
      if (vote.type === "down") {
        downVotes++
      }
    })
    return downVotes
  }
  const downVotes = getDownVotes()

  // RESOURCE RATINGS
  const averageRating = () => {
    let sum = 0;

    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    return sum / reviews.length;
  };

  return (
    <>
      <Card
        className={classes.card}
        style={{ display: "flex", flexWrap: "nowrap", marginTop: "15px" }}
        onMouseEnter={toggleHoverState}
        onMouseLeave={toggleHoverState}
      >
        {hover && (
          <Fab
            className={classes.fabColor}
            aria-label="edit"
            style={{
              position: "absolute",
              marginLeft: "-20px",
              marginTop: "-20px"
            }}
          >
            <EditIcon />
          </Fab>
        )}
        {props.image ? (
          <img
            src={props.image}
            style={{
              height: "100%",
              width: "200px"
            }}
          />
        ) : (
            ""
          )}
        <Grid style={{ width: "600px" }}>
          <CardHeader
            action={
              <>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </>
            }
            title={props.resource.title}
            subheader={
              <a href="#" target="_blank">
                {props.resource.url}
              </a>
            }
          />
          <CardContent
            style={{
              paddingTop: "0px",
              paddingBottom: "0px",
              margin: "-10px 0px"
            }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              {props.resource.description}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            style={{
              margin: "0px 5px",
              paddingTop: "0px",
              paddingBottom: "0px"
            }}
          >
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <div>
                <Rating
                  name="half-rating"
                  readOnly={true}
                  value={averageRating()}
                  precision={0.1}
                />
              </div>
              <Button
                color="primary"
                style={{ marginLeft: "0px", paddingLeft: "0px" }}
                onClick={props.toggleDrawer("right", true, props.resource)}
              >
                <div style={{ fontSize: "14px", marginLeft: "10px" }}>
                  {reviews.length} Reviews
                </div>
              </Button>
            </Grid>
            <div className={classes.grow}></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <IconButton onClick={() => handleVote("up")}>

                <ThumbUpIcon style={{ color: "#007791" }} />
              </IconButton>
              <div style={{ marginLeft: "-5px" }}>{upVotes}</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <IconButton onClick={() => handleVote("down")}>
                <ThumbDownIcon style={{ color: "#EC5252" }} />
              </IconButton>
              <div style={{ marginLeft: "-5px" }}>{downVotes}</div>
            </div>
          </CardActions>
        </Grid>
      </Card>
    </>
  );
}
