import React from "react";
import { Link } from "react-router-dom";
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
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import Avatar from "@material-ui/core/Avatar";
import Trophy from "@material-ui/icons/EmojiEvents";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import faker from "faker";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: theme.palette.primary.dark
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
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
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
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "5px"
  },
  largeIcon: {
    width: 60,
    height: 60
  }
  // badge: {
  //   backgroundColor: theme.palette.tertiary.main
  // }
}));

export default function TopNav(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile" style={{ color: "black" }}>
        <MenuItem onClick={handleMenuClose} style={{ padding: "5px 20px" }}>
          <AccountCircle style={{ marginRight: "5px" }} />
          Profile
        </MenuItem>
      </Link>
      <Link to="/rankings" style={{ color: "black" }}>
        <MenuItem onClick={handleMenuClose} style={{ padding: "5px 20px" }}>
          <Trophy style={{ marginRight: "5px" }} />
          Rankings
        </MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose} style={{ padding: "5px 20px" }}>
        <LogoutIcon style={{ marginRight: "5px" }} />
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="tertiary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
        <p>Rankings</p>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={props.toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              style={{
                color: "#ffffff",
                fontSize: "24px"
              }}
            >
              DevResources
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Chip
              label={<Chip label="#3666" style={{ color: "black" }} />}
              label="Rank #366 <> 1200 points"
              // onClick={handleClick}
              variant="outlined"
              style={{ marginTop: "17px", color: "#fff", borderColor: "gold" }}
            />
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              iconStyle={classes.largeIcon}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "-10px"
              }}
            >
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginRight: "10px"
                }}
              >
                <div style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                  Rank: 6
                </div>
                <Divider variant="middle" />
                <div style={{ fontSize: "12px" }}>Score: 120</div>
              </div> */}
              <Trophy
                style={{
                  height: "25px",
                  width: "25px",
                  color: "gold",
                  textShadow: "0 0 15px gold"
                }}
              />
            </IconButton>
            {/* <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              style={{ marginRight: "10px", marginLeft: "-10px" }}
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon style={{ height: "25px", width: "25px" }} />
              </Badge>
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <div>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={faker.image.avatar()}
                    />
                  }
                </Avatar>
              </div>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
