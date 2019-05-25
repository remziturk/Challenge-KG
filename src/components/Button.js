import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button 
        onClick={this.props.triggerButton}
        className="challenge__pick-up-apple">
        Shake Tree
      </button>
    );
  }
}

export default Button;
