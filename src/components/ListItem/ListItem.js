import React from "react";

export default class Todo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todoArrState: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.todoArr &&
      nextProps.todoArr.length &&
      nextProps.todoArr.length !== prevState.todoArrState.length
    ) {
      console.log(nextProps, prevState);

      return {
        todoArrState: [...nextProps.todoArr, "added something"],
      };
    }

    return null;
  }

  render() {
    const { todo, todoArr } = this.props;

    if (todoArr && todoArr.length && typeof todoArr === "object") {
      return <li>{JSON.stringify(this.state.todoArrState)}</li>;
    }

    return <li style={{ marginTop: 8 }}>{todo}</li>;
  }
}
