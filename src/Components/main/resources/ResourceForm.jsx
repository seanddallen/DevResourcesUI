// Title, Link, Description, Image
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
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
          {props.openForm ? "Close" : "Add Resource"}
        </div>
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
                alignItems: "center"
              }}
              noValidate
              autoComplete="off"
            >
              <TextField style={{ width: "250px" }} id="title" label="Title" />
              <TextField
                style={{ width: "250px", marginTop: "20px" }}
                id="link"
                label="Link"
              />
              <TextField
                id="description"
                label="Description"
                multiline
                rowsMax="4"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className={classes.textField}
                margin="normal"
                style={{ width: "250px" }}
              />
              <Input
                type="file"
                style={{ width: "250px", marginTop: "20px" }}
              />
            </form>
          </div>
          <Button
            color="secondary"
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
