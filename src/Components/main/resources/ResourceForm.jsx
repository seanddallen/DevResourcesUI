// Title, Link, Description, Image
//ADD: Year, Price, Level, Tags, Type, Subtype
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Select from "react-select";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { addResource } from '../../../Store/resources/resourcesActions';
import { useDispatch } from 'react-redux';

const levelOptions = [
  { label: "Beginner", value: "Beginner", resource: "Beginner" },
  { label: "Intermediate", value: "Intermediate", resource: "Intermediate" },
  { label: "Advanced", value: "Advanced", resource: "Advanced" }
];

const ageOptions = [
  { label: "0-1 Years", value: "new", resource: "new" },
  { label: "1-5 Years", value: "old", resource: "old" },
  { label: "5+ Years", value: "outdated", resource: "outdated" }
];

const priceOptions = [
  { label: "FREE", value: "Free", resource: "Free" },
  { label: "under $20", value: "under20", resource: "under20" },
  { label: "$20 - $100", value: "over20", resource: "over20" },
  { label: "over $100", value: "over100", resource: "over100" }
];

const tagOptions = [
  { label: "react", value: "react", resource: "react" },
  { label: "Redux", value: "Redux", resource: "Redux" },
  { label: "Angular", value: "Angular", resource: "Angular" },
  { label: "Vue", value: "Vue", resource: "Vue" },
  { label: "Node", value: "Node", resource: "Node" },
  { label: "Knex", value: "Knex", resource: "Knex" },
  { label: "Postgres", value: "Postgres", resource: "Redux" },
  { label: "Express", value: "Express", resource: "Express" },
  { label: "SQL", value: "SQL", resource: "SQL" },
  { label: "Spring", value: "Spring", resource: "Spring" },
  { label: "MVC", value: "MVC", resource: "MVC" },
  { label: "HTML", value: "HTML", resource: "Redux" },
  { label: "CSS", value: "CSS", resource: "CSS" },
  { label: "ES6", value: "ES6", resource: "ES6" }
];

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

  const dispatch = useDispatch();

  const handleSubmit = e => {
    // TODO: add inputs for type and subtype; hash out where getting logged in user to display as creator; add img functionality
    e.preventDefault();

    const date = new Date();
    const creationYear = date && new Number(Intl.DateTimeFormat('en-us', {
      year: 'numeric'
    }).format(date))

    dispatch(addResource({
      type: 'Insert Type',
      subtype: 'Insert Subtype',
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
                    width: "250px",
                    border: "1px solid #C7C7C7",
                    borderRadius: "6px"
                  }}
                >
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    // defaultValue={languageOptions[0]}
                    // isClearable={isClearable}
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
                    className="basic-single"
                    classNamePrefix="select"
                    // defaultValue={languageOptions[0]}
                    // isClearable={isClearable}
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
                    className="basic-single"
                    classNamePrefix="select"
                    // defaultValue={languageOptions[0]}
                    // isClearable={isClearable}
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
                    className="basic-single"
                    classNamePrefix="select"
                    // defaultValue={languageOptions[0]}
                    // isClearable={isClearable}
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
                  // value={tags.value}
                  // onChange={e => setTags([...tags, e.value])}
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
