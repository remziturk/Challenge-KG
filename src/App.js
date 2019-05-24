import React from 'react';
import './App.css';
import Tree from './components/Tree'
import Basket from './components/Basket'
import Apple from './components/Apple'
import Button from './components/Button'

class App extends React.Component {
  state = {
    startShake: false,
    position: [{x: 260, y: 155},{x: 180, y: 110},{x: 130, y: 360},{x: 300, y: 300},{x: 480, y: 360},{x: 560, y: 390},{x: 160, y: 250},{x: 400, y: 200},{x: 360, y: 130},{x: 460, y: 100}],
    basketPosition: 1000,
  }

  handleShakeButton = () => {
    const applePosition = this.state.position.map(apple => {
        const randomNumer = Math.floor((Math.random() * 2) + 1);
        if (randomNumer > 1) {
          this.setState({
            basketPosition: apple.x
          });
          return {x: apple.x, y: 700}
        };
        return apple;
    });
    console.log(applePosition);
    this.setState({
      startShake: true,
      position: applePosition,
    });
  }

  render() {
    return (
      <div className="challenge">
        <Tree statusShake={this.state.startShake} />
        {
          this.state.position.map((apple, index) => (
            <Apple key={index} positionX={apple.x} positionY={apple.y}/>
          ))
        }
        <Basket positionBasket= {this.state.basketPosition}/>
        <Button triggerButton={this.handleShakeButton} />
      </div>
    );
  }
}

export default App;
