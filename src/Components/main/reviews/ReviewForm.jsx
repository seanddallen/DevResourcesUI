// Title, Link, Description, Image
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ResourceForm(props) {
  const classes = useStyles();

  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");

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
                value={3.6}
                precision={0.1}
              />
              <TextField
                id="description"
                label="REVIEW"
                multiline
                rows="6"
                rowsMax="4"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className={classes.textField}
                margin="normal"
                style={{ width: "350px" }}
                color="secondary"
              />
            </form>
          </div>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            style={{ width: "120px", marginTop: "20px" }}
          >
            SUBMIT
          </Button>
        </>
      )}
    </div>
  );
}
