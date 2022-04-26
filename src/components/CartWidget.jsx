import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './styles/CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      const element = <FontAwesomeIcon icon={faCoffee} size="2x" color="white" />
      <div className="qty-display">0</div>
    </div>
  );
};
export default CartWidget;
