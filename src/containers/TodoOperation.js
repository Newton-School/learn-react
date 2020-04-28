import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo";

let ID = 3;

class TodoOperations extends React.PureComponent {
  state = {
    todo: "",
  };

  onChange = (evt) => {
    this.setState({ todo: evt.target.value });
  };

  onKeyPress = (evt) => {
    if (evt.key === "Enter") {
      // The object parameter has the data to be stored in state
      this.props.addTodo({
        id: ID++,
        text: this.state.todo,
      });

      this.setState({ todo: "" });
    }
  };

  render() {
    return (
      <div>
        <input
          value={this.state.todo}
          onKeyPress={this.onKeyPress}
          onChange={this.onChange}
        />

        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: () => dispatch(addTodo()),
//   };
// };

const mapStateToProps = (state) => {
  return { todos: [...state.todos] };
};

export default connect(mapStateToProps, {
  addTodo,
})(TodoOperations);
