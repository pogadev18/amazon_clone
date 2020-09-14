import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// firebase
import { auth } from '../../firebase/firebase';

// components
import FlashMessage from '../FlashMessage/FlashMessage';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';
import Login from '../../pages/Login/Login';

// State Provider & Main Reducers
import { useStateValue } from '../../store/Store';

import './App.scss';

function App() {
  const dispatch = useStateValue()[1];

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className='app'>
        <FlashMessage />
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
