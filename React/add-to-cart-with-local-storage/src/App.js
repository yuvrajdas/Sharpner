import { useEffect, useState } from 'react';
import './css/App.scss';
import MyCart from './view-components/MyCart';
import { createContext } from 'react';
export const MyCartContext = createContext();
function App() {
  const [pState, setPState] = useState({ p_name: '', p_price: 0, p_desc: '', id: '' });
  const [myCart, setMyCart] = useState([]);
  const [error, setError] = useState('');
  const [productList, setProductList] = useState([]);
  const [apiRes, setApiRes] = useState([]);

  // Form handler to set the form value to product state
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPState({
      ...pState,
      id: new Date().getMilliseconds(),
      [name]: value
    });
  };

  //Retrieving products from localstorage
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem('products'));
    setApiRes(res);
  }, [productList]);

  // Product form submission, adding form data in local storage.
  const addProductFromSubmission = (e) => {
    e.preventDefault();
    if (pState.p_desc === '' || pState.p_price === 0 || pState.p_desc === '') {
      setError('All fields are required');
      return;
    }

    setProductList([...productList, pState]);
    localStorage.setItem('products', JSON.stringify([...productList, pState]));
    setError('');
    setPState({ p_name: '', p_price: 0, p_desc: '', id: '' });
  };

  // Function to add product to cart
  const addInCart = (product, qty) => {
    setMyCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.id === product.id);
  
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        const updatedItem = { ...updatedCart[existingIndex] };
  
        // Update quantity and total price
        updatedItem.qty += qty;
        updatedItem.totalPrice = updatedItem.qty * updatedItem.p_price;
  
        updatedCart[existingIndex] = updatedItem;
        return updatedCart;
      } else {
        // If item not in cart, add it
        const newItem = {
          ...product,
          qty: qty,
          totalPrice: qty * product.p_price
        };
        return [...prevCart, newItem];
      }
    });
  };
  

  return (
    <>
      <div className='app-wrapper'>
        <MyCartContext.Provider value={myCart}>
        <MyCart cartItems={myCart} />
        </MyCartContext.Provider>
        <form onSubmit={addProductFromSubmission}>
          <div className='add-product-section'>
            <input onChange={inputHandler} value={pState.p_name} type="text" name="p_name" placeholder='Product Name' />
            <textarea onChange={inputHandler} value={pState.p_desc} rows="2" name="p_desc" cols="25" placeholder='Product Description'></textarea>
            <input onChange={inputHandler} value={pState.p_price} type="number" name="p_price" placeholder='Price' />
            <button type="submit">Add Product</button>
          </div>
        </form>
        <div>
          {error ? <p className='error'>{error}</p> : ''}
        </div>
        <div className='product-list'>
          <ul>
            {!apiRes ? <p className='error'>No Data </p> : apiRes.map((product) => {
              return (
                <li key={product.id} style={{marginBottom:'5px'}}>
                  <div>
                    <div>{product.p_name} </div>
                    <div>{product.p_desc}</div>
                    <div>Price <strong>$ {product.p_price}</strong></div>
                  </div>
                  <div>
                    <span className='add-btn' onClick={() => addInCart(product, 1)} >Add 1</span>
                    <span className='add-btn' onClick={() => addInCart(product, 2)} >Add 2</span>
                    <span className='add-btn' onClick={() => addInCart(product, 3)} >Add 3</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
