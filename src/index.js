import React from 'react';
import {render} from 'react-dom';
import store from './store';
import getRoutes from './routes/routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import './index.css';

render(
  <Provider store={store}>
    {getRoutes()}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
