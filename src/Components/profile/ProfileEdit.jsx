import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

import ProfileCard from "./ProfileCard";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "20px",
    width: "800px"
  }
}));

export default function ProfileEdit(props) {
  const classes = useStyles();

  const [education, setEducation] = React.useState(20);
  const [employment, setEmployment] = React.useState(50);
  const [experience, setExperience] = React.useState(30);
  const [speciality, setSpeciality] = React.useState(30);

  const [firstName, setFirstName] = React.useState("Sean");
  const [lastName, setLastName] = React.useState("Tayler");
  const [userName, setUserName] = React.useState("DevSean");
  const [email, setEmail] = React.useState("seanjtayler@gmail.com");

  const [personalURL, setPersonalURL] = React.useState("www.devresources.io");
  const [githubURL, setGithubURL] = React.useState(
    "https://github.com/seantayler"
  );
  const [linkedinURL, setLinkedinURL] = React.useState(
    "https://www.linkedin.com/in/seantayler/"
  );
  const [bio, setBio] = React.useState("This is my bio...");

  const handleEducation = event => {
    setEducation(event.target.value);
  };

  const handleEmployment = event => {
    setEmployment(event.target.value);
  };

  const handleExperience = event => {
    setExperience(event.target.value);
  };

  const handleSpeciality = event => {
    setSpeciality(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
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
            margin: "40px"
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ width: "250px", marginTop: "20px" }}
            id="first-name"
            label="First Name"
            color="secondary"
            placeholder="Sean"
            value={firstName}
          />
          <TextField
            style={{ width: "250px", marginTop: "20px" }}
            id="last-name"
            label="Last Name"
            color="secondary"
            placeholder="Tayler"
            value={lastName}
          />
          <TextField
            style={{ width: "250px", marginTop: "20px" }}
            id="user-name"
            label="User Name"
            placeholder="DevSean"
            value={userName}
          />
          <TextField
            style={{ width: "250px", marginTop: "20px" }}
            id="email"
            label="Email"
            color="secondary"
            placeholder="seanjtayler@gmail.com"
            value={email}
          />
        </form>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px"
          }}
          noValidate
          autoComplete="off"
        >
          {/* //Education, Employment, Experience, Speciality */}
          <FormControl
            className={classes.formControl}
            style={{ marginTop: "20px" }}
            color="secondary"
          >
            <InputLabel id="demo-simple-select-label">Education</InputLabel>
            <Select
              labelId="education"
              id="education"
              value={education}
              onChange={handleEducation}
              style={{ width: "250px", marginTop: "20px" }}
            >
              <MenuItem value={10}>CS Degree</MenuItem>
              <MenuItem value={20}>Bootcamp</MenuItem>
              <MenuItem value={30}>Self-Taught</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: "20px" }}
            color="secondary"
          >
            <InputLabel id="demo-simple-select-label">Employment</InputLabel>
            <Select
              labelId="employment"
              id="employment"
              value={employment}
              onChange={handleEmployment}
              style={{ width: "250px", marginTop: "20px" }}
            >
              <MenuItem value={10}>Hobbyist</MenuItem>
              <MenuItem value={20}>Student</MenuItem>
              <MenuItem value={30}>Freelancer</MenuItem>
              <MenuItem value={40}>Employed - Junior</MenuItem>
              <MenuItem value={50}>Employed - Mid</MenuItem>
              <MenuItem value={60}>Employed - Senior</MenuItem>
              <MenuItem value={70}>Employed - Lead+</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: "10px" }}
            color="secondary"
          >
            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
            <Select
              labelId="experience"
              id="experience"
              value={experience}
              onChange={handleExperience}
              style={{ width: "250px", marginTop: "20px" }}
            >
              <MenuItem value={10}>0-1 years</MenuItem>
              <MenuItem value={20}>1-2 years</MenuItem>
              <MenuItem value={30}>2-5 years</MenuItem>
              <MenuItem value={40}>5-10 years</MenuItem>
              <MenuItem value={50}>10+ years</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: "20px" }}
            color="secondary"
          >
            <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
            <Select
              labelId="speciality"
              id="speciality"
              value={speciality}
              onChange={handleSpeciality}
              style={{ width: "250px", marginTop: "20px" }}
            >
              <MenuItem value={10}>Full-Stack</MenuItem>
              <MenuItem value={20}>Back-End</MenuItem>
              <MenuItem value={30}>Front-End</MenuItem>
              <MenuItem value={40}>Dev-Ops</MenuItem>
              <MenuItem value={50}>Data Science</MenuItem>
              <MenuItem value={60}>Machine Learning</MenuItem>
            </Select>
          </FormControl>
        </form>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px"
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ width: "250px", marginTop: "20px" }}
            id="personalURL"
            label="Personal URL (Optional)"
            color="secondary"
            value={personalURL}
          />
          <TextField
            style={{ width: "250px", marginTop: "20px" }}
            id="githubURL"
            label="Github URL (Optional)"
            color="secondary"
            value={githubURL}
          />
          <TextField
            style={{ width: "250px", marginTop: "20px" }}
            id="linkedinURL"
            label="LinkedIn URL (Optional)"
            color="secondary"
            value={linkedinURL}
          />
          <TextField
            style={{ width: "250px", marginTop: "20px" }}
            id="bio"
            label="Personal Bio (Optional)"
            color="secondary"
            value={bio}
          />
        </form>
      </div>
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
          variant="contained"
          className={classes.button}
          style={{ width: "120px", marginTop: "40px" }}
        >
          UPDATE
        </Button>
        <Button
          color="primary"
          className={classes.button}
          style={{ width: "120px", marginTop: "10px" }}
          onClick={() => props.setOpenForm(!props.openForm)}
        >
          <div style={{ fontSize: "14px" }}>
            {props.openForm ? "Close" : "Edit Resource"}
          </div>
        </Button>
      </div>
    </div>
  );
}
