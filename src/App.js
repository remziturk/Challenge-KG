// Import Style & Components
import React from "react";
import Tree from "./components/Tree";
import Basket from "./components/Basket";
import Apple from "./components/Apple";
import Button from "./components/Button";
import "./assets/styles/App.scss";

class App extends React.Component {
  // Define States
  state = {
    startShake: false,

    // Apples Position for on Tree
    position: [
      { x: 260, y: 155, status: null },
      { x: 180, y: 110, status: null },
      { x: 130, y: 360, status: null },
      { x: 300, y: 300, status: null },
      { x: 480, y: 360, status: null },
      { x: 560, y: 390, status: null },
      { x: 160, y: 250, status: null },
      { x: 400, y: 200, status: null },
      { x: 360, y: 130, status: null },
      { x: 460, y: 100, status: null }
    ],

    // The First Left Position Value of the Basket
    basketPosition: 1000,
    
    // Determines Which Apple Will Fall When the Button is Pressed
    dropedIndex: 0, 
  };

  // Function Start for Shaking Tree & Moving Basket & Apples 
  handleShakeButton = () => {
    this.setState({startShake: false});
    const dropedIndex = this.state.dropedIndex;
    
    // Set Basket & Apples Position After Shaking Tree 
    setTimeout( () => {
      const applePosition = this.state.position.map((apple, index) => {
        if (index === dropedIndex) {
          this.setState({
            basketPosition: apple.x - 60,
            dropedIndex: dropedIndex + 1,
          });

          // Knowledge of the Position and Status of the Falling Apple
          return { x: apple.x, y: 670, status: "droped" };
        }
        return apple;
      });

      // Set State for Tree's Shaking
      this.setState({
        startShake: true,
        position: applePosition
      });
    })
  };

  // Finally. The tip of the Iceberg  
  render() {
    return (
      <div className="challenge">
        <Tree statusShake={this.state.startShake} />
        {this.state.position.map((apple, index) => (
          <Apple key={index} positionX={apple.x} positionY={apple.y} status={apple.status} />
        ))}
        <Basket positionBasket={this.state.basketPosition} />
        <Button triggerButton={this.handleShakeButton} />
      </div>
    );
  }
}

export default App;
