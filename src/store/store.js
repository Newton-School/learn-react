// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import React, { createContext, useReducer, useMemo } from "react";
import { reducers, reducersInitialState } from "../reducers/";

// const createStore = (reducer) => {
//   // reducer = (state = {}, action) => {}
//   let state;
//   let listenerList = [];

//   // Get the current state
//   const getState = () => state;

//   // Dispatch the actions
//   const dispatch = (action) => {
//     state = reducer(state, action); // 1

//     listenerList.forEach((listener) => listener());
//   };

//   dispatch({});

//   // Subscribe to store changes
//   const subscribe = (listener) => {
//     listenerList.push(listener);

//     return () => {
//       listenerList = listenerList.filter(
//         (existingListener) => existingListener !== listener
//       );
//     };
//   };

//   return {
//     getState,
//     dispatch,
//     subscribe,
//   };
// };

// reducers = (state = {}, action) => {}
// const middlewares = [thunk];
// const store = createStore(reducers, applyMiddleware(...middlewares));

export const store = createContext(reducersInitialState);
const { Provider } = store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, reducersInitialState);

  const memoStore = useMemo(() => ({ state, dispatch }), [state]);

  return <Provider value={memoStore}>{children}</Provider>;
};
