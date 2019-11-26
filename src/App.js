import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TopNav from './Components/layout/TopNav';
import StickyNav from './Components/layout/StickyNav';
import Footer from './Components/layout/Footer';
import Main from './Components/main/Main';
import Login from './Components/login/Login';
import Registration from './Components/login/Registration';
import Profile from './Components/profile/Profile';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import './index.css';


const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
});

//onClick={toggleDrawer('left', true)}

function App() {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState({ left: false, right: false });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer({ ...drawer, [side]: !drawer[side] });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        FILTERS
      </List>
      <Divider />
      <List>
        SEARCH
      </List>
    </div>
  );

  //REFACTOR WITH REDUX: Drawer Reducer to open/close left/right drawer

  return (
    <div className="App">
      <BrowserRouter>
        { !window.location.pathname.includes('login') && !window.location.pathname.includes('registration') &&
          <>
            <TopNav toggleDrawer={toggleDrawer} />
            <StickyNav toggleDrawer={toggleDrawer} />
          </>
        }
        <Switch>
          <Route exact path="/" component={() => <Main toggleDrawer={toggleDrawer}/>} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Drawer open={drawer.left} onClose={toggleDrawer("left", false)}>
          {sideList("left")}
        </Drawer>
        <Drawer anchor="right" open={drawer.right} onClose={toggleDrawer('right', false)}>
          {sideList('right')}
        </Drawer>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
