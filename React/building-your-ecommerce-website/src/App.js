import React, { createContext, useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.scss';
import Header from './layout/Header';
import Home from './view-components/Home';
import About from './view-components/About';
import Store from './view-components/Store';
import Footer from './layout/Footer';
import PageNotFound from './view-components/PageNotFound';
import { cartReducer } from './reducer/Reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CartContext = createContext();
const initState = {
  grandTotal: 0,
  myCart: [],
  totalQty: 0,
}
function App() {
  const [cartState, dispatch] = useReducer(cartReducer, initState);
  const notify = (msg) => toast(msg);

  const addToCart = (prod) => {
    let itemToBEaddedIdx = cartState.myCart.findIndex((item) => item.id === prod.id)
    if (itemToBEaddedIdx !== -1) {
      notify(`${prod.title} is already Added`);
      return;
    }else{
      notify(`${prod.title} is Added into your cart`);
    }

    return dispatch({
      type: 'ADD_TO_CART',
      payload: prod
    })
  }

  const removeFromCart = (prod) => {
    notify(`${prod.title} removed from your cart`);
    return dispatch({
      type:'DELETE',
      payload:prod
    })
  }

  const purchase = ()=>{
    notify(`Thanks for the purchase`);
    return dispatch({
      type:'PURCHASE',
    })
  }
  return (
    <>
      <ToastContainer />
      <CartContext.Provider value={{ cartState, addToCart, removeFromCart, purchase }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </CartContext.Provider>
      <Footer />
    </>
  );
}

export default App;
