import React from "react";
import { 
  makeStyles,
  Divider,
  Grid,
  Button
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers } from "../../../Store/users/usersActions";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(0.5)
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
  }
}));

export default function Review(props) {
  const classes = useStyles();
  const [openComments, setOpenComments] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const users = useSelector(state => state.users.all);
  const userByReview = users.filter(
    user => user.id === props.review.user_id
  )[0];
  const reviewDate = props.review.created_at.slice(0, 10);

  return (
    <>
      <Divider />
      <Grid style={{ margin: "20px" }}>
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="half-rating"
              readOnly={true}
              value={props.review.rating}
              precision={0.1}
            />
            <Button
              color="primary"
              style={{ marginLeft: "0px", paddingLeft: "0px" }}
            >
              <div style={{ fontSize: "14px", marginLeft: "10px" }}>
                {userByReview ? userByReview.first_name + " " : ""}
                {userByReview ? userByReview.last_name : ""}
              </div>
            </Button>
          </div>
          <div>{reviewDate}</div>
        </Grid>
        <Grid style={{ marginTop: "10px" }}>{props.review.content}</Grid>
        <Grid>
          <Button
            color="primary"
            className={classes.button}
            style={{ width: "160px", marginTop: "10px" }}
            onClick={() => setOpenComments(!openComments)}
          >
            View/Add Comments
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
