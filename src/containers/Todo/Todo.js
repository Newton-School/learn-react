import React from "react";
import ListItem from "../../components/ListItem/ListItem";
import Button from "../../components/Button/Button";
import styles from "./style.module.css";

export default class Todo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      listOfTodos: [],
      text: "",
    };
  }

  onAddTodo = () => {
    this.setState(
      (prevState) => ({
        listOfTodos: [...prevState.listOfTodos, this.state.text],
      }),
      () => {
        this.reset();

        this.newItem = "";
      }
    );
  };

  onKeyDown = (evt) => {
    if (evt.key === "Enter") {
      this.onAddTodo();
    }
  };

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  reset = () => {
    this.setState({ text: "" });
  };

  renderListItem = (listOfTodos) => {
    if (!listOfTodos.length) {
      return <li>No todos are available!</li>;
    }

    return listOfTodos.map((todo, index) => {
      return <ListItem key={todo} todo={todo} />;
    });
  };

  render() {
    const { listOfTodos } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TODO</h1>

        <div style={{ display: "flex" }}>
          <input
            onChange={this.handleChange}
            onKeyDown={this.onKeyDown}
            value={this.state.text}
          />

          <Button label="Add" onClick={this.onAddTodo} />
        </div>

        <ul className={styles.listOftodos}>
          {this.renderListItem(listOfTodos)}
        </ul>

        <ul>
          <ListItem todoArr={listOfTodos} />
        </ul>
      </div>
    );
  }
}
