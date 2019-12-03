import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "react-select";

const languageOptions = [
  { label: "javascript", value: "javascript", language: "Javascript" },
  { label: "java", value: "java", language: "Java" },
  { label: "c#", value: "c#", language: "C#" },
  { label: "python", value: "python", language: "Python" },
  { label: "php", value: "php", language: "PHP" },
  { label: "ruby", value: "ruby", language: "Ruby" }
];

const educationOptions = [
  { label: "Online Courses", value: "Courses", resource: "Courses" },
  { label: "Tutorials", value: "Tutorials", resource: "Tutorials" },
  { label: "Bootcamps", value: "Bootcamps", resource: "Bootcamps" }
];
const careerOptions = [
  { label: "Job Sites", value: "Job Sites", resource: "Job Sites" },
  { label: "Companies", value: "Companies", resource: "Companies" }
];
const printOptions = [
  { label: "Books", value: "Books", resource: "Books" },
  { label: "Blogs", value: "Blogs", resource: "Blogs" }
];
const mediaOptions = [
  { label: "Podcasts", value: "Podcasts", resource: "Podcasts" },
  {
    label: "YouTube Channels",
    value: "YouTube Channels",
    resource: "YouTube Channels"
  },
  {
    label: "YouTube Playlists",
    value: "YouTube Playlists",
    resource: "YouTube Playlists"
  },
  {
    label: "YouTube Videos",
    value: "YouTube Videos",
    resource: "YouTube Videos"
  }
];
const practiceOptions = [
  {
    label: "Code Challenges",
    value: "Code Challenges",
    resource: "Code Challenges"
  }
];
const techOptions = [
  { label: "Languages", value: "Languages", resource: "Languages" },
  { label: "Frameworks", value: "Frameworks", resource: "Frameworks" },
  { label: "Libraries", value: "Libraries", resource: "Libraries" }
];
const referenceOptions = [
  { label: "Cheatsheets", value: "Cheatsheets", resource: "Cheatsheets" },
  {
    label: "Learning Paths",
    value: "Learning Paths",
    resource: "Learning Paths"
  }
];
const gearOptions = [
  { label: "Keyboards", value: "Keyboards", resource: "Keyboards" },
  { label: "Chairs", value: "Chairs", resource: "Chairs" },
  { label: "Headphones", value: "Headphones", resource: "Headphones" }
];
const merchOptions = [
  { label: "Shirts", value: "Shirts", resource: "Shirts" },
  { label: "Accessories", value: "Accessories", resource: "Accessories" }
];
const funOptions = [{ label: "Memes", value: "Memes", resource: "Memes" }];

const groupedOptions = [
  { label: "EDUCATION", options: educationOptions },
  { label: "CAREER", options: careerOptions },
  { label: "PRINT", options: printOptions },
  { label: "MEDIA", options: mediaOptions },
  { label: "PRACTICE", options: practiceOptions },
  { label: "REFERENCE", options: referenceOptions },
  { label: "TECH", options: techOptions },
  { label: "GEAR", options: gearOptions },
  { label: "MERCH", options: merchOptions },
  { label: "FUN", options: funOptions }
];

const useStyles = makeStyles(theme => ({
  noPadding: {
    padding: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    border: "2px solid #C7C7C7",
    borderRadius: "6px",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    height: "38px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    color: "#C7C7C7",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    // color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  option: {
    color: "black"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: "#C7C7C7",
    padding: 20
  }),
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};

export default function StickyNav(props) {
  const classes = useStyles();

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);

  const toggleClearable = () => {
    setIsClearable(!isClearable);
  };

  const toggleSearchable = () => {
    setIsSearchable(!isSearchable);
  };

  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };
  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center"
  };

  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  return (
    <div
      className={classes.grow}
      style={{
        marginTop: "0px",
        position: "sticky",
        top: "0",
        zIndex: "1000"
      }}
    >
      <AppBar position="static" style={{ backgroundColor: "#EFEFEF" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Toolbar style={{ width: "90vw" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
            <div className={classes.grow} />
            <div
              style={{
                margin: "0 10px 0 0",
                minWidth: "200px",
                border: "1px solid #C7C7C7",
                borderRadius: "6px"
              }}
            >
              <Select
                className="basic-single"
                classNamePrefix="select"
                // defaultValue={languageOptions[0]}
                isClearable={isClearable}
                name="language"
                options={languageOptions}
                className={classes.option}
                placeholder="Language"
                style={{
                  minWidth: "200px",
                  color: "#C7C7C7"
                }}
              />
            </div>
            <div
              style={{
                margin: "0 10px 0 0",
                minWidth: "200px",
                border: "1px solid #C7C7C7",
                borderRadius: "6px"
              }}
            >
              <Select
                className="basic-single"
                classNamePrefix="select"
                // defaultValue={resourceOptions[0]}
                isClearable={isClearable}
                name="resources"
                options={groupedOptions}
                formatGroupLabel={formatGroupLabel}
                style={{
                  minWidth: "200px",
                  color: "#C7C7C7"
                }}
                placeholder="Resource Type"
                className={classes.option}
              />
            </div>
            {/* <div className={classes.grow} /> */}
            <div>
              <Button
                variant="outlined"
                size="medium"
                className={classes.button}
                style={{ margin: "0 10px" }}
                onClick={props.toggleDrawer("left", true)}
              >
                FILTERS
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className={classes.margin}
              >
                SEARCH
              </Button>
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}
