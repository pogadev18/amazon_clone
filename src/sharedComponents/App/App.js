import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import FlashMessage from '../FlashMessage/FlashMessage';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';

// State Provider & Main Reducers
import { StateProvider } from '../../store/Store';
import { mainReducers } from '../../reducers/mainReducers';

import './App.scss';

function App() {
  return (
    <StateProvider reducer={mainReducers}>
      <Router>
        <div className='app'>
          <FlashMessage />
          <Header />
          <Switch>
            <Route exact path='/checkout'>
              <Checkout />
            </Route>

            <Route exact path='/'>
              <Home />
            </Route>
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
