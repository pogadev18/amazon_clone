import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStateValue } from '../../store/Store';

function PrivateRoute({ children, ...rest }) {
  const [{ user }] = useStateValue();
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to='/login' />)}
    />
  );
}

export default PrivateRoute;
