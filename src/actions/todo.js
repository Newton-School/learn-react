import { TODO } from "../type";

export const addTodo = (dispatch, payload) => {
  return dispatch({
    type: TODO.ADD_TODO,
    id: payload.id,
    text: payload.text,
    completed: false,
  });
};
