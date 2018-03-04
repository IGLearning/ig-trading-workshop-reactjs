import React from 'react';
import Signup from '../containers/signup/signup';
import MarketView from '../containers/marketView/marketView';
import {history} from '../store';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

const Routes = (persistor) => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route
            exact
            persistor={store.persistor}
            path='/'
            render={(() => <MarketView persistor={persistor}/>)}
            component={MarketView}
          />
          <Route
            exact
            persistor={store.persistor}
            path='/sign-up'
            render={(() => <Signup persistor={persistor}/>)}
          />
        </Switch>
      </div>
    </Router>
  )
};

export default Routes;
