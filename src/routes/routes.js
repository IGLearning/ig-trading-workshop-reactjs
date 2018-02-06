import React from 'react';
import Markets from '../containers/home/home';
import Login from '../containers/login/login';
import About from '../containers/testAbout';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Markets}/>
          <Route exact path='/log-in' component={Login} />
          <Route exact path='/about-us' component={About}/>
        </Switch>
      </div>
    </Router>
  );
}
