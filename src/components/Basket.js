import React from'react';
import basket from '../assets/images/basket.svg'

class Basket extends React.Component {
    render () {
        return (
            <img src={basket} className="basket" style={{left: this.props.positionBasket}} alt="Basket"/>
        ); 
    }
}

export default Basket;