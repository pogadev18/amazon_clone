import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';

import './App.scss';

function App() {
  return (
    <Router>
      <div className='app'>
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
  );
}

export default App;
