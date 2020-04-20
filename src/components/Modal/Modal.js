import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.PureComponent {
  renderModal(props) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          background: "black",
        }}
      >
        <button onClick={props.toggleModal}>Close</button>

        <div>{props.children}</div>
      </div>
    );
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }

    return ReactDOM.createPortal(this.renderModal(this.props), modalRoot);
  }
}

export default Modal;
