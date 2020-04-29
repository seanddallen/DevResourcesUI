// Title, Link, Description, Image
//ADD: Year, Price, Level, Tags, Type, Subtype
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Input, Fab } from "@material-ui/core";
import Select from "react-select";
import AddIcon from "@material-ui/icons/Add";
import { addResource } from '../../../Store/resources/resourcesActions';
import { useDispatch } from 'react-redux';

import {
  levelOptions,
  ageOptions,
  priceOptions,
  tagOptions,
  typeOptions,
  subtypeOptions
} from "./FormOptions"

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

  // Hooks for Form State
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [age, setAge] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [type, setType] = React.useState("");
  const [subtype, setSubtype] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    // TODO: hash out where getting logged in user to display as creator; add img functionality
    e.preventDefault();

    const date = new Date();
    const creationYear = date && new Number(Intl.DateTimeFormat('en-us', {
      year: 'numeric'
    }).format(date))

    dispatch(addResource({
      type: type,
      subtype: subtype,
      title: title,
      creator: 'Sean Taylor',
      creation_year: creationYear,
      url: link,
      description: description,
      image: 'someRandoImg.jpeg',
      price: price,
      skill_level: level,
      shares: 0,
      upvotes: 0,
      downvotes: 0,
      approved: false
    }))

    props.setOpenForm(!props.openForm)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {!props.openForm && (
        <Fab
          color="primary"
          aria-label="add"
          style={{ position: "fixed", bottom: 30, right: 30 }}
          onClick={() => props.setOpenForm(!props.openForm)}
        >
          <AddIcon />
        </Fab>
      )}

      {props.openForm && (
        <>
          <div style={{ fontSize: "16px", marginBottom: "20px" }}>
            Add a Resource
          </div>
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
                justifyContent: "center",
                alignItems: "center"
              }}
              noValidate
              autoComplete="off"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TextField
                  style={{ width: "250px" }}
                  id="title"
                  label="Title"
                  color="secondary"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                <TextField
                  style={{ width: "250px", marginTop: "20px" }}
                  id="link"
                  label="Link"
                  color="secondary"
                  value={link}
                  onChange={e => setLink(e.target.value)}
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
                  color="secondary"
                />
                <Input
                  type="file"
                  color="secondary"
                  style={{ width: "250px", marginTop: "20px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "50px"
                }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    minWidth: "100%",
                    border: "1px solid #C7C7C7",
                    borderRadius: "6px"
                  }}
                >
                  <Select
                    classNamePrefix="select"
                    name="type"
                    options={typeOptions}
                    className={classes.option}
                    placeholder="Resource Type"
                    style={{ color: "#C7C7C7" }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: "6px",
                      borderWidth: "2px",
                      colors: {
                        ...theme.colors,
                        primary: "#EC5252"
                      }
                    })}
                    value={type.value}
                    onChange={e => setType(e.value)}
                  />
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    minWidth: "100%",
                    border: "1px solid #C7C7C7",
                    borderRadius: "6px"
                  }}
                >
                  <Select
                    classNamePrefix="select"
                    name="subtype"
                    options={subtypeOptions}
                    className={classes.option}
                    placeholder="Resource Subtype"
                    style={{ color: "#C7C7C7" }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: "6px",
                      borderWidth: "2px",
                      colors: {
                        ...theme.colors,
                        primary: "#EC5252"
                      }
                    })}
                    value={subtype.value}
                    onChange={e => setSubtype(e.value)}
                  />
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    width: "250px",
                    border: "1px solid #C7C7C7",
                    borderRadius: "6px"
                  }}
                >
                  <Select
                    classNamePrefix="select"
                    name="experience"
                    options={levelOptions}
                    className={classes.option}
                    placeholder="Resource Level"
                    style={{ color: "#C7C7C7" }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: "6px",
                      borderWidth: "2px",
                      colors: {
                        ...theme.colors,
                        primary: "#EC5252"
                      }
                    })}
                    value={level.value}
                    onChange={e => setLevel(e.value)}
                  />
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    minWidth: "100%",
                    border: "1px solid #C7C7C7",
                    borderRadius: "6px"
                  }}
                >
                  <Select
                    classNamePrefix="select"
                    name="age"
                    options={ageOptions}
                    className={classes.option}
                    placeholder="Resource Age"
                    style={{ color: "#C7C7C7" }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: "6px",
                      borderWidth: "2px",
                      colors: {
                        ...theme.colors,
                        primary: "#EC5252"
                      }
                    })}
                    value={age.value}
                    onChange={e => setAge(e.value)}
                  />
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    minWidth: "100%",
                    border: "1px solid #C7C7C7",
                    borderRadius: "6px"
                  }}
                >
                  <Select
                    classNamePrefix="select"
                    name="price"
                    options={priceOptions}
                    className={classes.option}
                    placeholder="Resource Price"
                    style={{ color: "#C7C7C7" }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: "6px",
                      borderWidth: "2px",
                      colors: {
                        ...theme.colors,
                        primary: "#EC5252"
                      }
                    })}
                    value={price.value}
                    onChange={e => setPrice(e.value)}
                  />
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    minWidth: "100%",
                    border: "1px solid #C7C7C7",
                    borderRadius: "6px"
                  }}
                >
                  <Select
                    classNamePrefix="select"
                    name="tags"
                    isMulti
                    options={tagOptions}
                    className={classes.option}
                    placeholder="Resource Tags"
                    style={{ color: "#C7C7C7" }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: "6px",
                      borderWidth: "2px",
                      colors: {
                        ...theme.colors,
                        primary: "#EC5252"
                      }
                    })}
                    onChange={e => setTags([...tags, e.value])}
                  />
                </div>
              </div>
            </form>
          </div>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            style={{ width: "120px", marginTop: "40px" }}
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
          <Button
            color="primary"
            className={classes.button}
            style={{ width: "120px", marginTop: "10px" }}
            onClick={() => props.setOpenForm(!props.openForm)}
          >
            <div style={{ fontSize: "14px" }}>
              {props.openForm ? "Close" : "Add Resource"}
            </div>
          </Button>
        </>
      )}
    </div>
  );
}
