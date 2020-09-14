import React from 'react';
import ReactDOM from 'react-dom';

import { StateProvider } from './store/Store';
import { mainReducers } from './reducers/mainReducers';
import App from './sharedComponents/App/App';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={mainReducers}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
