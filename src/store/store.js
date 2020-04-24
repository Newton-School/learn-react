// import { createStore } from "redux";
import reducers from "../reducers/";

const createStore = (reducer) => {
  // reducer = (state = {}, action) => {}
  let state;
  let listenerList = [];

  // Get the current state
  const getState = () => state;

  // Dispatch the actions
  const dispatch = (action) => {
    state = reducer(state, action); // 1

    listenerList.forEach((listener) => listener());
  };

  dispatch({});

  // Subscribe to store changes
  const subscribe = (listener) => {
    listenerList.push(listener);

    return () => {
      listenerList = listenerList.filter(
        (existingListener) => existingListener !== listener
      );
    };
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

// reducers = (state = {}, action) => {}
const store = createStore(reducers);

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });

console.log(store.getState());

export default store;
