import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles, lighten } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 30,
    backgroundColor: lighten("#C7C7C7", 0.5)
  },
  bar: {
    borderRadius: 0,
    backgroundColor: "#ff6c5c"
    // width: "200px"
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

export default function ReviewDrawer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openComments, setOpenComments] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <h3>FILTERS</h3>
      </Grid>
      <Divider />
      <Grid style={{ margin: "20px" }}>
        <Grid style={{ marginTop: "20px", fontSize: "16px" }}>
          DEVELOPER RATING: 3.6
        </Grid>
        <Grid
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon />
          </div>
          <div style={{ marginLeft: "5px" }}>236</div>
        </Grid>
        <Grid className={classes.root} style={{ marginTop: "10px" }}>
          <Grid style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "5px" }}>5</div>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={75}
              style={{ width: "75%" }}
            />
            <div style={{ marginLeft: "5px" }}>200</div>
          </Grid>
          <Grid style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "5px" }}>4</div>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={15}
              style={{ width: "75%" }}
            />
            <div style={{ marginLeft: "5px" }}>20</div>
          </Grid>
          <Grid style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "6px" }}>3</div>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={1}
              style={{ width: "75%" }}
            />
            <div style={{ marginLeft: "5px" }}>3</div>
          </Grid>
          <Grid style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "6px" }}>2</div>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={1}
              style={{ width: "75%" }}
            />
            <div style={{ marginLeft: "5px" }}>3</div>
          </Grid>
          <Grid style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>1</div>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={8}
              style={{ width: "75%" }}
            />
            <div style={{ marginLeft: "5px" }}>10</div>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: "20px" }}>
          <div style={{ fontSize: "16px" }}>Showing 1-10 of 36 Reviews</div>
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
      <Divider />
      {/* {listOfReviews} */}
      <Grid style={{ margin: "20px" }}>
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon />
          </div>
          <div>11/08/19</div>
        </Grid>
        <Grid style={{ marginTop: "10px" }}>
          Donec aliquam ornare nunc, eget gravida diam sodales nec. Morbi nec
          commodo felis, suscipit viverra orci. Pellentesque quis est tincidunt,
          feugiat nisl vitae, ultrices mi. Sed tempor a tellus a rhoncus. Nam
          pretium, velit nec imperdiet porttitor, tellus ipsum pretium mauris,
          vitae sollicitudin nisi velit sed nunc. Cras ut magna eu magna
          vestibulum finibus. Cras ut magna eu magna vestibulum finibus.
        </Grid>
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
      <Divider />
    </div>
  );
}
