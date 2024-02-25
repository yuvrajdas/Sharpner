import React from 'react'
import CartContext from './CartContext'
const CartProvider = (props) => {
    console.log(props);
  return (
    
    <CartContext.Provider value={CartContext}>
        {props.children}
    </CartContext.Provider>
 
  )
}

export default CartProvider