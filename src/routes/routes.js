import React from 'react';
import Signup from '../containers/signup/signup';
import MarketView from '../containers/marketView/marketView';
import {history} from '../store';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path='/' component={MarketView} />
          <Route exact path='/sign-up' component={Signup} />
        </Switch>
      </div>
    </Router>
  )
};

export default Routes;
