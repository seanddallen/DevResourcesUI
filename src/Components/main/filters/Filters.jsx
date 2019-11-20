import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
});

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`
//   };
// }

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
    <Card
      style={{ height: "83vh", margin: "10px", position: "fixed" }}
      className={classes.card}
    >
      <Grid style={{ margin: "20px", marginTop: "0px" }}>
        <Grid container direction="row" justify="space-between">
          <h3>FILTERS</h3>
          <h6>Clear All</h6>
        </Grid>
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
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              //   variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                label="All"
                style={{
                  minWidth: "10px",
                  width: "50%"
                }}
              />
              <Tab
                label="Saved"
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
      </Grid>
    </Card>
  );
}
