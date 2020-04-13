import React from "react";
import Button from "../components/Button/Button";

export default class Todo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isClick: false,
    };
  }

  handleClick = () => {
    this.setState({ isClick: !this.state.isClick });
  };

  render() {
    const { isClick } = this.state;

    return (
      <div>
        <h1>Todo Application</h1>

        {isClick ? <span>Clicked</span> : <span>Not Clicked</span>}

        <Button label="Add" onClick={this.handleClick} />
      </div>
    );
  }
}
