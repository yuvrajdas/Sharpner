import './css/App.css';
import Navbar from './layout/Navbar';
import ProductList from './view-components/ProductList';
import { products } from './db'
import { createContext, useReducer } from 'react';
import { cartReducer } from './reducer/Reducer'
export const ProductContext = createContext();

const state = {
  allProduct: products,
  totalCartItem: 0,
  myCart: []
}

function App() {

  const [crrState, dispatch] = useReducer(cartReducer, state);
  const AddQty = (qty) => {
    return dispatch({
      type:'ADD_1',
      pyaload:qty
    })
  }

  return (
    <>
      <ProductContext.Provider value={{ state, AddQty }}>
        <Navbar />
        <ProductList />
      </ProductContext.Provider>
    </>
  );
}

export default App;
