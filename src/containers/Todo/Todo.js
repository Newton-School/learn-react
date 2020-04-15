import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./style.module.css";

export default class Todo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      listOfTodos: [],
    };
  }

  setTodoItem = (text) => {
    this.newItem = text;
  };

  onSubmit = () => {
    this.setState(
      { listOfTodos: [...this.state.listOfTodos, this.newItem] },
      () => {
        console.log(this.state);
      }
    );

    this.newItem = "";
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TODO</h1>

        <div style={{ display: "flex" }}>
          <Input onChange={this.setTodoItem} />

          <Button label="Add" onClick={this.onSubmit} />
        </div>
      </div>
    );
  }
}
