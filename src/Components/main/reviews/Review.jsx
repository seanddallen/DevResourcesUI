import React from "react";
import { makeStyles, withStyles, lighten } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import Rating from "@material-ui/lab/Rating";

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

  return (
    <>
      <Divider />
      <Grid style={{ margin: "20px" }}>
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {/* <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon /> */}
            <Rating
              name="half-rating"
              readOnly={true}
              value={1.7}
              precision={0.1}
            />
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
    </>
  );
}
