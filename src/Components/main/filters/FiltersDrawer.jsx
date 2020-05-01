import React from "react";
import Select from "react-select";
import { Grid, Divider, Button, AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

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

function TabPanel(props) {
  const { value, index, ...other } = props;

  return (
    <Typography
      component="div"
      hidden={value !== index}
      {...other}
    ></Typography>
  );
}

export default function Filters() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid style={{ margin: "20px", marginTop: "0px" }}>
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "-20px"
        }}
      >
        <h3 style={{ marginBottom: "-20px" }}>FILTERS</h3>
        <h6>Clear All</h6>
      </Grid>
      <Divider style={{ width: "120%", marginLeft: "-20px" }} />
      <div className={classes.root} style={{ marginTop: "20px" }}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            aria-label="full width tabs example"
          >
            <Tab
              label={
                <>
                  <div>
                    <AllInclusiveIcon />
                  </div>
                  <span style={{ fontSize: "14px" }}>All</span>
                </>
              }
              style={{
                minWidth: "10px",
                width: "50%"
              }}
            />
            <Tab
              label={
                <>
                  <div>
                    <FavoriteIcon />
                  </div>
                  <span style={{ fontSize: "14px" }}>Saved</span>
                </>
              }
              style={{
                minWidth: "10px",
                width: "50%"
              }}
            />
          </Tabs>
        </AppBar>
      </div>
      <div className={classes.root} style={{ marginTop: "10px" }}>
        <div
          style={{
            marginTop: "40px",
            minWidth: "100%",
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
          />
        </div>
        <div
          style={{
            marginTop: "40px",
            height: "20px",
            width: "100%"
          }}
        >
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
            style={{
              height: "40px",
              width: "100%"
            }}
          >
            SEARCH
          </Button>
        </div>
      </div>
    </Grid>
  );
}
