// import { createStore } from "redux";
import counter from "../reducers/counter";

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    console.log(listeners);
    listeners.forEach((listener) => listener());
  };

  dispatch({});

  // This function can be called multiple times with different listeners
  const subscribe = (listener) => {
    // keep track of the listeners
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(
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

const store = createStore(counter);

// Initial State
console.log(store.getState());

store.subscribe(() => {
  alert(`Counter value: ${store.getState()}`);
});

const clearConsoleListener = store.subscribe(() => {
  console.log(`Counter value: ${store.getState()}`);
});

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
  clearConsoleListener();
});
