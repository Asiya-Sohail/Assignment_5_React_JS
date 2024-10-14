import React from 'react';
import { createContext, useState } from "react";

const Context1 = createContext();

function Provider(props) {
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <Context1.Provider value={{visible, setVisible,cartItems, setCartItems}}>
        {props.children}
    </Context1.Provider>
  )
}

export {Provider};
export default Context1;