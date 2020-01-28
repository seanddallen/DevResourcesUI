import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import ThumbUpIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDownAlt";
import Rating from "@material-ui/lab/Rating";
import EditIcon from "@material-ui/icons/Edit";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
  Fab,
  makeStyles
} from "@material-ui/core";

import {
  addResourceVote,
  getAllResourceVotes,
  updateResourceVote,
  removeResourceVote,
  getOneResourceVote
} from "../../../Store/votes/resourceVotesActions";
import {updateResource} from "../../../Store/resources/resourcesActions"
import resourceVotesReducer from "../../../Store/votes/resourceVotesReducer";

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
  const [expanded, setExpanded] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const user = useSelector(state => state.users.current)
  // console.log("USER", user)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const toggleHoverState = () => {
    setHover(!hover);
  };
// console.log("PROPS>RESOURCE", props.card.id)
  const handleVote = (type) => {
    // dispatch(addResourceVote(props.card.id, user.id, type));


    dispatch(addResourceVote({user_id: 1, resource_id: props.card.id, type: type}));
    //i want to add vote up if thumbs up is clicked and vote down if thumbs down is clicked
    //if the user has already clicked on thumbs up and they want to click on thumbs down we want to also
    //do a subtraction from thumbs up so a delete api call
    //once they have hit up and down we disable the voting on the resource for that user
    //if()
  };
  // const handleVoteDown = () => {};

  const averageRating = () => {
    let { reviews } = props.card;
    let sum = 0;

    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating
    }
    return sum / reviews.length
  }

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
            // src={require("../../../assets/images/mrwr.jpg")}
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
            // avatar={
            //   <Avatar aria-label="recipe" className={classes.avatar}>
            //     R
            //   </Avatar>
            // }
            action={
              // <IconButton aria-label="settings">
              //   <MoreVertIcon />
              // </IconButton>
              <>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </>
            }
            title={props.card.title}
            subheader={
              <a href="#" target="_blank">
                {props.card.url}
              </a>
            }
          />
          {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
          <CardContent
            style={{
              paddingTop: "0px",
              paddingBottom: "0px",
              margin: "-10px 0px"
            }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              {props.card.description}
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
                {/* <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon /> */}
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
                onClick={props.toggleDrawer("right", true)}
              >
                <div style={{ fontSize: "14px", marginLeft: "10px" }}>
                  {props.card.reviews.length} Reviews
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
              {/* Do we still want to put a upvote/downvote counter in the resources table */}
              <IconButton onClick={() => handleVote("up")}>
                <ThumbUpIcon />
              </IconButton>
              <div style={{ marginLeft: "-5px" }}>{props.card.upvotes}</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <IconButton onClick={() => handleVote("down")}>
                <ThumbDownIcon />
              </IconButton>
              <div style={{ marginLeft: "-5px" }}>{props.card.downvotes}</div>
            </div>
            {/* <div className={classes.grow}></div> */}
            {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
          </CardActions>
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse> */}
        </Grid>
      </Card>
    </>
  );
}
