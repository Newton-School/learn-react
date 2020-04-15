import React from "react";
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

  onSubmit = () => {
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

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  reset = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TODO</h1>

        <div style={{ display: "flex" }}>
          <input onChange={this.handleChange} value={this.state.text} />

          <Button label="Add" onClick={this.onSubmit} />
        </div>
      </div>
    );
  }
}
