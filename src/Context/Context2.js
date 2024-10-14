import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [visible, setVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, visible, showDrawer, closeDrawer }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
