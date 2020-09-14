import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../../firebase/firebase';
import { useStateValue } from '../../store/Store';

import Button from '../../sharedComponents/Button/Button';

import './Login.scss';

function Login() {
  const dispatch = useStateValue()[1];
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          history.push('/');
          dispatch({
            type: 'NEW_MESSAGE',
            value: 'Signed In successfully!'
          });
        }
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          history.push('/');
          dispatch({
            type: 'NEW_MESSAGE',
            value: 'Account created with success!'
          });
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <section className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='Amazon Logo'
        />
      </Link>

      <section className='login__container'>
        <h1 className='login__title'>Sign In</h1>
        <form>
          <h5 className='login__formTitle'>E-mail</h5>
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            className='login__input'
            type='email'
          />

          <h5 className='login__formTitle'>Password</h5>
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            className='login__input'
            type='password'
          />

          <Button
            onClick={signIn}
            className='login__signInButton'
            type='submit'
            text='Sign In'
          />
        </form>
        <p>
          By signing-in you agree to the AMAZONE CLONE Conditins of Use &amp;
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>

        <Button
          onClick={register}
          className='login__registerButton'
          type='submit'
          text='Create your Amazon Account'
        />
      </section>
    </section>
  );
}

export default Login;
