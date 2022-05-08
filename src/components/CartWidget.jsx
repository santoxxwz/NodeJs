import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
 

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
      <div className="qty-display">{cart.length}</div>
    </div>
  );
};

export default CartWidget;
