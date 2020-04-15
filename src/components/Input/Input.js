import React from "react";

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });

    this.props.onChange(evt.target.value);
  };

  reset() {
    this.setState({ text: "" });
  }

  render() {
    return <input onChange={this.handleChange} value={this.state.text} />;
  }
}
