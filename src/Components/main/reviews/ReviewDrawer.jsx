import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles, lighten } from "@material-ui/core/styles";
import { Divider, Grid, IconButton, LinearProgress } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import { useSelector } from "react-redux";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const BorderLinearProgress = withStyles({
  root: {
    height: 30,
    backgroundColor: lighten("#C7C7C7", 0.5)
  },
  bar: {
    borderRadius: 0,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

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

export default function ReviewDrawer({ resource }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);

  // REVIEWS
  const allReviews = useSelector(state => state.reviews.all);
  const recReviews = allReviews.filter(review => review.resource_id === resource.id)

  let numberOfReviews = 0;
  let fiveStar = 0;
  let fourStar = 0;
  let threeStar = 0;
  let twoStar = 0;
  let oneStar = 0;
  let sumOfRatings = 0;
  let averageOfRatings = 0;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  for (let i = 0; i < recReviews.length; i++) {
    numberOfReviews++;
    if (recReviews[i].rating === 5) {
      fiveStar += 1;
    } else if (recReviews[i].rating === 4) {
      fourStar += 1;
    } else if (recReviews[i].rating === 3) {
      threeStar += 1;
    } else if (recReviews[i].rating === 2) {
      twoStar += 1;
    } else if (recReviews[i].rating === 1) {
      oneStar += 1;
    }
    sumOfRatings += recReviews[i].rating;
    averageOfRatings = sumOfRatings / numberOfReviews;
  }

  let percentOfFiveStar = (fiveStar / numberOfReviews) * 100;
  let percentOfFourStar = (fourStar / numberOfReviews) * 100;
  let percentOfThreeStar = (threeStar / numberOfReviews) * 100;
  let percentOfTwoStar = (twoStar / numberOfReviews) * 100;
  let percentOfOneStar = (oneStar / numberOfReviews) * 100;

  const listOfReviews = recReviews.map((review, i) => {
    return <Review key={i} review={review} />;
  });

  return (
    <div>
      <Grid
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <h3>REVIEWS</h3>
      </Grid>
      <Divider />
      <Grid style={{ marginBottom: "-20px" }}>
        <ReviewForm
          openForm={openForm}
          resource={resource}
          setOpenForm={setOpenForm}
        />
      </Grid>
      {!openForm ? (
        <>
          <Grid style={{ margin: "20px" }}>
            <Grid style={{ fontSize: "16px" }}>
              DEVELOPER RATING: {averageOfRatings.toFixed(1)}
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px"
              }}
            >
              <div>
                <Rating
                  name="half-rating"
                  readOnly={true}
                  size={"large"}
                  value={averageOfRatings}
                  precision={0.1}
                />
              </div>
              <div style={{ marginLeft: "5px" }}>{numberOfReviews}</div>
            </Grid>
            <Grid className={classes.root} style={{ marginTop: "10px" }}>
              <Grid style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "5px" }}>5</div>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={percentOfFiveStar}
                  style={{ width: "75%" }}
                />
                <div style={{ marginLeft: "5px" }}>{fiveStar}</div>
              </Grid>
              <Grid style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "5px" }}>4</div>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={percentOfFourStar}
                  style={{ width: "75%" }}
                />
                <div style={{ marginLeft: "5px" }}>{fourStar}</div>
              </Grid>
              <Grid style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "6px" }}>3</div>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={percentOfThreeStar}
                  style={{ width: "75%" }}
                />
                <div style={{ marginLeft: "5px" }}>{threeStar}</div>
              </Grid>
              <Grid style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "6px" }}>2</div>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={percentOfTwoStar}
                  style={{ width: "75%" }}
                />
                <div style={{ marginLeft: "5px" }}>{twoStar}</div>
              </Grid>
              <Grid style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "10px" }}>1</div>
                <BorderLinearProgress
                  className={classes.margin}
                  variant="determinate"
                  color="secondary"
                  value={percentOfOneStar}
                  style={{ width: "75%" }}
                />
                <div style={{ marginLeft: "5px" }}>{oneStar}</div>
              </Grid>
            </Grid>
            <Grid style={{ marginTop: "20px" }}>
              {numberOfReviews <= 10 ? (
                <div style={{ fontSize: "16px" }}>
                  Showing 1-{numberOfReviews} of {numberOfReviews} Reviews
                </div>
              ) : (
                <div style={{ fontSize: "16px" }}>
                  Showing 1-10 of {numberOfReviews} Reviews
                </div>
              )}  
            </Grid>
            <Grid style={{ marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div>SORT BY: HIGHEST RATED</div>
                <div>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </div>
              </div>
            </Grid>
          </Grid>
          {listOfReviews}
        </>
      ) : null}
    </div>
  );
}
