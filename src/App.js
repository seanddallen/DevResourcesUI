import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import TopNav from './Components/layout/TopNav';
import StickyNav from './Components/layout/StickyNav';
import Footer from './Components/layout/Footer';
import Main from './Components/main/Main';
import Login from './Components/login/Login';
import Registration from './Components/login/Registration';
import Profile from './Components/profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav/>
        <StickyNav/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/profile" component={Profile} />
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
