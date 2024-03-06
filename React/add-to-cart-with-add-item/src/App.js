import './css/App.css';
import Navbar from './layout/Navbar';
import ProductList from './view-components/ProductList';
import { products } from './db'
import { createContext, useReducer } from 'react';
import { cartReducer } from './reducer/Reducer'
export const ProductContext = createContext();

let apiRes = products.map((prod) => {
  return {
    ...prod,
    sub_total: 0,
    quantity: 0
  }
})
const initState = {
  allProduct: apiRes,
  totalCartItem: 0,
  grandTotal: 0,
  myCart: []
}

function App() {

  const [crrState, dispatch] = useReducer(cartReducer, initState);
  const AddQty = (qty, item) => {
    return dispatch({
      type: `ADD_${qty}`,
      payload: { qty: qty, item: item }
    })
  }
  const AddProduct = (item) => {
    return dispatch({
      type:'ADD_PRODUCT',
      payload:item
    })
  }
  return (
    <>
      <ProductContext.Provider value={{ crrState, AddQty, AddProduct }}>
        <Navbar />
        <ProductList />
      </ProductContext.Provider>
    </>
  );
}

export default App;
