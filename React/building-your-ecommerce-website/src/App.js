import React, { createContext, useEffect, useReducer } from 'react';
import {  Routes, Route } from 'react-router-dom';
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
  grandTotal:0,
  myCart:[],
  isAlreadyExistInCart:false
}
function App() {
  const [cartState, dispatch] = useReducer(cartReducer, initState);
  const notify = () => toast("Product is already Added");
  const addToCart = (prod)=>{
   return dispatch({
      type:'ADD_TO_CART',
      payload:prod
    })
  }
  
  useEffect(()=>{
     
    if(cartState.isAlreadyExistInCart){
      notify();
    }
  },[cartState.isAlreadyExistInCart])
   
  return (
    <>
      <ToastContainer />
      <Header />
      <CartContext.Provider value={{cartState, addToCart}}>
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
