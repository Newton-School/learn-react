import React from "react";

export default class Todo extends React.PureComponent {
  state = {
    employees: [],
  };

  componentDidMount() {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ employees: [...res.data] });
      });
  }

  render() {
    return <div>{JSON.stringify({ ...this.state.employees })}</div>;
  }
}
