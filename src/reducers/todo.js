const initialTodos = [
  {
    id: 1,
    text: "Get groceries",
    completed: false,
  },
  {
    id: 2,
    text: "Make your bed",
    completed: false,
  },
];

const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { id, text, completed } = action;

      return [
        ...state,
        {
          id,
          text,
          completed,
        },
      ];
    }
    case "TOGGLE_TODO": {
      const { id } = action;

      return state.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    default:
      return state;
  }
};

export default todos;
