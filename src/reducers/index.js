import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todo";
import employees from "./employees";

// listOfReducers = {
// counter: (state = initialCounter, action) => { },
//   todo: (state = initialTodos, action) =>
// }
// const combineReducers = (listOfReducers) => {
//   return (state = {}, action) => {
//     // e.g ['counter', 'todos']
//     const arrOfReducerProperties = Object.keys(listOfReducers);

//     return arrOfReducerProperties.reduce((nextState, key) => {
//       // nextState.counter = listOfReducers.counter(undefined, {}) => 0
//       // nextState.todos = listOfReducers.todos(undefined, {}) => [{}, {}]
//       nextState[key] = listOfReducers[key](state[key], action);
//       return nextState;
//     }, {});
//   };
// };

// reducers = (state = {}, action) => {}
const reducers = combineReducers({
  counter,
  todos,
  employees,
});

export default reducers;
