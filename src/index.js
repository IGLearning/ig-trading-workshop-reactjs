import React from 'react';
import {render} from 'react-dom';
import createStore from './store';
import getRoutes from './routes/routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

const store = createStore();

render(
  <MuiThemeProvider>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        {getRoutes(store.persistor)}
      </PersistGate>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
