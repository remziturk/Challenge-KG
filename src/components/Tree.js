import React from 'react';
import tree from '../assets/images/tree.svg'

class Tree extends React.Component {
  render() {
    return (
      <img src={tree}
        className={`challenge__tree
        ${
          this.props.statusShake ? "shaking" : "" 
        }`}
        alt="Tree"
      />
    );
  }
}

export default Tree;