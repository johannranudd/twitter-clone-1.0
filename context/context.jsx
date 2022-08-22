import { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { initialState, reducer } from './reducer';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
