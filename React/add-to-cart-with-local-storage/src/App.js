import { useEffect, useState } from 'react';
import './css/App.scss';
import MyCart from './view-components/MyCart';

function App() {
  const [pState, setPState] = useState({ p_name: '', p_price: 0, p_desc: '', id: '' })
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
    })
  }

  //Retriving products from localstorage
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem('products'));
    setApiRes(res)
  }, [productList])

  // Product form submission, adding form data in locastorage.
  const addProductFromSubmission = (e) => {
    e.preventDefault();
    if (pState.p_desc === '' || pState.p_price === 0 || pState.p_desc === '') {
      setError('All field are required');
      return;
    }

    setProductList([...productList, pState]);
    localStorage.setItem('products', JSON.stringify([...productList, pState]));
    setError('')
    setPState({ p_name: '', p_price: 0, p_desc: '', id: '' })
  }

  const addInCart = ()=>{
    
  }
  

  return (
    <>
      <div className='app-wrapper'>
        <MyCart />
        {JSON.stringify(apiRes)}
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
            {!apiRes ? <p className='error'></p> : ''}
            {apiRes.map((ele) => {
              return (
                <li>
                  <div>
                    <div>{ele.p_name} </div>
                    <div>{ele.p_desc}</div>
                    <div>Price <strong>$ {ele.p_price}</strong></div>
                  </div>
                  <div>
                    <span className='add-btn' onClick={addInCart}>Add 1</span> <span className='add-btn'>Add 2</span> <span className='add-btn'>Add 3</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
