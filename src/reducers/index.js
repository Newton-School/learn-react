// import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todo";

// listOfReducers = {
// counter: (state = initialCounter, action) => { },
//   todo: (state = initialTodos, action) =>
// }
const combineReducers = (listOfReducers) => {
  return (state = {}, action) => {
    // e.g ['counter', 'todos']
    const arrOfReducerProperties = Object.keys(listOfReducers);

    return arrOfReducerProperties.reduce((nextState, key) => {
      // nextState.counter = listOfReducers.counter(undefined, {}) => 0
      // nextState.todos = listOfReducers.todos(undefined, {}) => [{}, {}]
      nextState[key] = listOfReducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

// nextState = {
//   counter: 0,
//   todos: [{}, {}]
// }

// reducers = (state = {}, action) => {}
const reducers = combineReducers({
  counter,
  todos,
});

export default reducers;
