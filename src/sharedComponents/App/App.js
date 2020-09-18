import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// firebase
import { auth } from '../../firebase/firebase';

// components
import FlashMessage from '../FlashMessage/FlashMessage';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';
import Login from '../../pages/Login/Login';
import Payment from '../../pages/Payment/Payment';
import Orders from '../../pages/Orders/Orders';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

// State Provider & Main Reducers
import { useStateValue } from '../../store/Store';

import './App.scss';

const promise = loadStripe(
  'pk_test_51HS0S4Lae8dODZwuAkJryTIv3sYYDpG7JvgMJNrSYGyJ19THWzs6er6dAkSaPXcHazNXGTv3eESB9kTZ2f94Sx1c00rtl5aNvT'
);

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

          <Route exact path='/orders'>
            <Header />
            <Orders />
          </Route>

          <PrivateRoute path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </PrivateRoute>

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
