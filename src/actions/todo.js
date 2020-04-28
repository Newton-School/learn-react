import { TODO } from "../type";

export const addTodo = (payload) => {
  return {
    type: TODO.ADD_TODO,
    id: payload.id,
    text: payload.text,
    completed: false,
  };
};
