import React from "react";
import Modal from "../../components/Modal/Modal";

class Portal extends React.PureComponent {
  state = {
    open: false,
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <button onClick={this.toggleModal}>Open Modal</button>

        <Modal showModal={this.state.open} toggleModal={this.toggleModal}>
          <div style={{ color: "white" }}>Hooray!!!</div>

          <p style={{ color: "white" }}>This is a new text field!!</p>
        </Modal>
      </div>
    );
  }
}

export default Portal;
