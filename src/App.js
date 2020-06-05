// TODO: REFACTOR WITH REDUX: Drawer Reducer to open/close left/right drawer

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { useDispatch } from 'react-redux';
import { getAllResources } from './Store/resources/resourcesActions';
import { getAllResourceVotes } from './Store/votes/resourceVotesActions';
import { fetchAllReviews } from './Store/reviews/reviewsActions';
import { fetchAllFavorites } from './Store/favorites/favoritesActions';

import './index.css';
import TopNav from './Components/layout/TopNav';
import StickyNav from './Components/layout/StickyNav';
import Main from './Components/main/Main';
import Login from './Components/login/Login';
import Registration from './Components/login/Registration';
import Profile from './Components/profile/Profile';
import FiltersDrawer from './Components/main/filters/FiltersDrawer';
import ReviewDrawer from './Components/main/reviews/ReviewDrawer';
import Rankings from './Components/rankings/Rankings';
import Admin from './Components/admin/Admin';
import EditResourceForm from './Components/main/resources/EditResourceForm';

const theme = createMuiTheme({
  //PRIMARY (blue) - #007791
  //SECONDARY (red) - #EC5252
  //TERTIARY (blue) - #F4C150
  //PRIMARY (blue) - #C6C6C6

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#007791"
      // dark: '#F26837'
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#F4C150',
      main: "#EC5252"
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.secondary.main
    },
    tertiary: {
      // light: '#C6C6C6',
      main: "#F4C150"
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.secondary.main
    },
    grey: {
      light: "#C6C6C6",
      main: "#6D6E70"
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.secondary.main
    }
    // error: will use the default color
  },
  typography: {
    fontFamily: '"Poppins", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  overrides: {
    MuiInput: {
        underline: 'green'
    },
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#EC5252"
        },
        "&$active": {
          color: "#EC5252"
        }
      },
      active: {},
      completed: {}
    }
  }
});

const useStyles = makeStyles({
  list: {
    width: 500
  },
  fullList: {
    width: "auto"
  },
  leftDrawer: {
    width: 400
  },
  rightDrawer: {
    width: 500
  }
});

function App() {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState({ left: false, right: false });
  const [resource, setResource] = React.useState(null);
  const [reviews, setReviews] = React.useState([]);
  
  // useEffect for initial API calls
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllResources());
    dispatch(getAllResourceVotes());
    dispatch(fetchAllReviews());
    dispatch(fetchAllFavorites());
  }, [dispatch])

  const toggleDrawer = (side, open, resource) => event => {
    if (event.type === 'keydown' && 
       (event.key === 'Tab' || event.key === 'Shift')
      ) {
      return;
    }
    setDrawer({ ...drawer, [side]: !drawer[side] });
    if (resource) {
      setResource(resource);
    }
    if (resource && resource.reviews) {
      setReviews(resource.reviews)
    } 
  };

  const sideList = side => (
    <div>
      {side === "left" ? (
        <div
          className={classes.leftDrawer}
          role="presentation"
        >
          <FiltersDrawer />
        </div>
      ) : (
        <div
          className={classes.rightDrawer}
          role="presentation"
        >
          <ReviewDrawer resource={resource} />
        </div>
      )}
    </div>
  );

  // RESOURCE EDIT
  // const history = useHistory();
  const handleRecEditClick = resource => {
    console.log("RESOURCE: ", resource)
    setResource(resource);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          {!window.location.pathname.includes("login") &&
            !window.location.pathname.includes("registration") && (
              <>
                <TopNav
                  className={classes.topNav}
                  toggleDrawer={toggleDrawer}
                />
                {!window.location.pathname.includes("profile") &&
                  !window.location.pathname.includes("rankings") &&
                  !window.location.pathname.includes("admin") && (
                    <StickyNav toggleDrawer={toggleDrawer} />
                  )}
              </>
            )}
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Main toggleDrawer={toggleDrawer} handleRecEditClick={handleRecEditClick} />}
            />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/profile" component={Profile} />
            <Route path="/rankings" component={Rankings} />
            <Route path="/admin" component={Admin} />
            <Route path="/recEdit" component={() => <EditResourceForm resource={resource} />} />
          </Switch>
          <Drawer open={drawer.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
          <Drawer
            anchor="right"
            open={drawer.right}
            onClose={toggleDrawer("right", false)}
          >
            {sideList("right")}
          </Drawer>
        </MuiThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
