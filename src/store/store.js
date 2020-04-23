// import { createStore } from "redux";
import counter from "../reducers/counter";

const alertMe = () => {
  alert(`Counter value: ${store.getState()}`);
};

const consoleMe = () => {
  console.log(`Counter value: ${store.getState()}`);
};

const createStore = (reducer) => {
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

// Creating a redux store
const store = createStore(counter);

console.log(store.getState());

store.subscribe(alertMe);

// Function that removes the listener consoleMe
const removeConsoleListener = store.subscribe(consoleMe);

store.dispatch({ type: "INCREMENT" }); // 1

removeConsoleListener();

store.dispatch({ type: "INCREMENT" }); // 1
