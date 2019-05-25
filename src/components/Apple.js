import React from "react";
import apple from "../assets/images/apple.svg";

class Apple extends React.Component {
  render() {
    return (
      <img
        className={`challenge__apple
        ${
          this.props.status === "droped" ? "challenge__apple__droped" : ""
        }`}
        src={apple}
        alt="Apple"
        style={{ top: this.props.positionY, left: this.props.positionX }}
      />
    );
  }
}

export default Apple;
