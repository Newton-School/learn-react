import React from "react";

export default class ListItem extends React.PureComponent {
  componentWillUnmount() {
    alert("hey");
  }

  render() {
    const { todo, onRemove } = this.props;

    return (
      <li style={{ marginTop: 8 }}>
        {todo} &nbsp; &nbsp;
        <button type="button" onClick={() => onRemove(todo)}>
          X
        </button>
      </li>
    );
  }
}
