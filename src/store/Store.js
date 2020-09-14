import React, { createContext, useContext, useReducer } from 'react';

// initial state of the app
const initialState = {
  basket: [],
  flashMessage: '',
  user: null
};

// prepare the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer
export const StateProvider = ({ reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
