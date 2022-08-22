import { createContext, useContext } from 'react';
import { useState, useReducer, useEffect } from 'react';
import { initialState, reducer } from './reducer';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log('context:', state);

  useEffect(() => {
    dispatch({ type: 'INITIAL' });
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
