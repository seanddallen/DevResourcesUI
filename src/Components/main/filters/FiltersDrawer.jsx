// import React from "react";
// import Divider from "@material-ui/core/Divider";
// import List from "@material-ui/core/List";

// export default function FiltersDrawer() {
//   return (
//     <div>
//       <List>FILTERS</List>
//       <Divider />
//       <List>SEARCH</List>
//     </div>
//   );
// }

import React from "react";
import Select from "react-select";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    // backgroundColor: theme.palette.background.paper,
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
  //   heading: {
  //     fontSize: theme.typography.pxToRem(15),
  //     fontWeight: theme.typography.fontWeightRegular
  //   }
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
      //   role="tabpanel"
      hidden={value !== index}
      //   id={`full-width-tabpanel-${index}`}
      //   aria-labelledby={`full-width-tab-${index}`}
      {...other}
    ></Typography>
  );
}

export default function Filters() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
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
      {/* <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup
                  color="primary"
                  size="large"
                  fullWidth
                  aria-label="large outlined secondary button group"
                >
                  <Button style={{ width: "100%" }}>All</Button>
                  <Button style={{ width: "100%" }}>Saved</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      <div className={classes.root} style={{ marginTop: "20px" }}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            //   variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label={<span style={{ fontSize: "14px" }}>All</span>}
              style={{
                minWidth: "10px",
                width: "50%"
              }}
            />
            <Tab
              label={<span style={{ fontSize: "14px" }}>Saved</span>}
              style={{
                minWidth: "10px",
                width: "50%"
              }}
            />
          </Tabs>
        </AppBar>
        {/* <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
          </SwipeableViews> */}
      </div>
      <div className={classes.root} style={{ marginTop: "10px" }}>
        {/* <ExpansionPanel style={{ width: "100%" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={classes.heading}
              style={{ minWidth: "10px" }}
            >
              Language
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ minWidth: "100%" }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Resource Type</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}
        <div
          style={{
            marginTop: "40px",
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
            name="experience"
            options={levelOptions}
            className={classes.option}
            placeholder="Resource Level"
            style={{ color: "#C7C7C7" }}
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
