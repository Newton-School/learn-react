import React, { useState, useContext } from "react";
import { store } from "../store/store";
import { addTodo } from "../actions/todo";

let ID = 3;

const TodoOperations = () => {
  const { state, dispatch } = useContext(store);
  const [todo, setTodo] = useState("");

  const onChange = (evt) => {
    setTodo(evt.target.value);
  };

  const onKeyPress = (evt) => {
    if (evt.key === "Enter") {
      // The object parameter has the data to be stored in state
      addTodo(dispatch, {
        id: ID++,
        text: todo,
      });

      setTodo("");
    }
  };

  return (
    <div>
      <input value={todo} onKeyPress={onKeyPress} onChange={onChange} />

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoOperations;
