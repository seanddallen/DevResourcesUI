import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  }
}));

export default function Registration() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [education, setEducation] = React.useState("");
  const [employment, setEmployment] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [speciality, setSpeciality] = React.useState("");

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  function getSteps() {
    return ["Basic Details", "Developer Details", "Register"];
  }
  const steps = getSteps();

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h3>BASIC DETAILS</h3>
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
              <TextField
                style={{ width: "250px", marginTop: "20px" }}
                id="first-name"
                label="First Name"
                color="secondary"
              />
              <TextField
                style={{ width: "250px", marginTop: "20px" }}
                id="last-name"
                label="Last Name"
                color="secondary"
              />
              {/* <TextField
                style={{ width: "250px" }}
                id="user-name"
                label="User Name"
              /> */}
              <TextField
                style={{ width: "250px", marginTop: "20px" }}
                id="email"
                label="Email"
                color="secondary"
              />
            </form>
          </div>
        );
      case 1:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h3>DEVELOPER DETAILS</h3>
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
                <InputLabel id="demo-simple-select-label">
                  Employment
                </InputLabel>
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
                style={{ marginTop: "20px" }}
                color="secondary"
              >
                <InputLabel id="demo-simple-select-label">
                  Experience
                </InputLabel>
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
                <InputLabel id="demo-simple-select-label">
                  Speciality
                </InputLabel>
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
          </div>
        );
      case 2:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h3>COMPLETE REGISTRATION</h3>
            <div
              style={{
                border: "1px solid #C7C7C7",
                borderRadius: "3px",
                padding: "20px"
              }}
            >
              <div>Once Registered you will be able to:</div>
              <ol>
                <li>Add resources</li>
                <li>Review Resources</li>
                <li>Vote on Resources</li>
                <li>View Saved resources</li>
              </ol>
            </div>
          </div>
        );
      default:
        return "Unknown stepIndex";
    }
  }

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

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "75vh"
            }}
          >
            <Typography
              className={classes.instructions}
              // style={{
              //   border: "2px solid black",
              //   borderRadius: "3px",
              //   backgroundColor: "green",
              //   padding: "10px"
              // }}
            >
              Registration Successful!
            </Typography>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100vw",
                marginTop: "20px"
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Register" : "Next"}
              </Button>
            </div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
