// Title, Link, Description, Image?
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { addOneReview } from "../../../Store/reviews/reviewsActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ResourceForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [rating, setRating] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addOneReview({
        content: content,
        rating: Number(rating),
        user_id: 1,
        resource_id: props.resource.id
      })
    );
    props.setOpenForm(!props.openForm);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Button
        color="primary"
        className={classes.button}
        style={{ width: "120px" }}
        onClick={() => props.setOpenForm(!props.openForm)}
      >
        <div style={{ fontSize: "14px" }}>
          {props.openForm ? "Close" : "Add Review"}
        </div>{" "}
      </Button>
      {props.openForm && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px"
              }}
              noValidate
              autoComplete="off"
            >
              <span>RATE: </span>
              <Rating
                name="half-rating"
                readOnly={false}
                value={rating}
                onChange={e => setRating(e.target.value)}
                precision={1}
              />
              <TextField
                id="description"
                label="REVIEW"
                multiline
                rows="6"
                rowsMax="4"
                value={content}
                onChange={e => setContent(e.target.value)}
                className={classes.textField}
                margin="normal"
                style={{ width: "350px" }}
                color="secondary"
              />
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                style={{ width: "120px", marginTop: "20px" }}
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
