import { createContext, useReducer } from "react";
import { Initials, Reducers } from "./reducers";

const Context = createContext(null);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers, Initials);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { StateProvider, Context };
