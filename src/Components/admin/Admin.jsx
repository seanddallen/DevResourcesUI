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
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import FavoriteIcon from "@material-ui/icons/Favorite";

import UsersTable from "./UsersTable";
import ResourcesTable from "./ResourcesTable";
import ReviewsTable from "./ReviewsTable";

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
  const [value, setValue] = React.useState("");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Grid style={{ margin: "20px", marginTop: "0px" }}>
      <div
        className={classes.root}
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <AppBar position="static" color="default" style={{ width: "600px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            //   variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label={<span style={{ fontSize: "14px" }}>Users</span>}
              style={{
                minWidth: "10px",
                width: "200px"
              }}
              value="users"
            />
            <Tab
              label={<span style={{ fontSize: "14px" }}>Resources</span>}
              style={{
                minWidth: "10px",
                width: "200px"
              }}
              value="resources"
            />
            <Tab
              label={<span style={{ fontSize: "14px" }}>Reviews</span>}
              style={{
                minWidth: "10px",
                width: "200px"
              }}
              value="reviews"
            />
          </Tabs>
        </AppBar>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {value === "users" && <UsersTable />}
        {value === "resources" && <ResourcesTable />}
        {value === "reviews" && <ReviewsTable />}
      </div>
    </Grid>
  );
}
