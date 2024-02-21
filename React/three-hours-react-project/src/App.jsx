import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [productDetails, setProductDetails] = useState({
    productId: '',
    productPrice: '',
    productName: ''
  });

  const [productList, setProductList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);  

  useEffect(() => {
    const storedProducts = Object.values(localStorage).map(item => JSON.parse(item));
    setProductList(storedProducts);
    const total = storedProducts.reduce((acc, curr) => acc + parseFloat(curr.productPrice), 0);
    setTotalCost(total);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const addProduct = (e) => {
    e.preventDefault();
    const price = parseFloat(productDetails.productPrice);
    setTotalCost(prevTotalCost => prevTotalCost + price);  
    localStorage.setItem(productDetails.productId.toString(), JSON.stringify(productDetails));
    setProductList(prevProductList => [...prevProductList, productDetails]);
    setProductDetails({
      productId: '',
      productPrice: '',
      productName: ''
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value
    });
  }

  const deleteFromCart = (prod) => {
    const index = productList.findIndex((item) => item.productId === prod.productId);
    if (index !== -1) {
      const updatedList = [...productList.slice(0, index), ...productList.slice(index + 1)];
      setProductList(updatedList);
      const price = parseFloat(prod.productPrice);
      setTotalCost(prevTotalCost => prevTotalCost - price);  
      localStorage.removeItem(prod.productId.toString());
    }
  };
  
  return (
    <>
      <div className="container mt-3">
        <h3 className='text-center mb-4'>Product Cart</h3>
        <form onSubmit={addProduct}>
          <div className="row">
            <div className="col-md-3">
              <input type="text" name="productId" placeholder='Product ID' value={productDetails.productId} onChange={handleInputChange} className='form-control shadow-none' />
            </div>
            <div className="col-md-3">
              <input type="number" name="productPrice" placeholder='Selling Price' value={productDetails.productPrice} onChange={handleInputChange} className='form-control shadow-none' />
            </div>
            <div className="col-md-3">
              <input type="text" name="productName" placeholder='Product Name' value={productDetails.productName} onChange={handleInputChange} className='form-control shadow-none' />
            </div>
            <div className="col-md-3">
              <button className='btn btn-outline-success'>Add Product</button>
            </div>
          </div>
        </form>

        <div className='mt-4'>
          <h4>Products</h4>
          <ul className="list-group list-group-flush col-md-4 ms-4">
            {productList.map(product => (
              <li key={product.productId} className="list-group-item d-flex justify-content-between">
                {product.productPrice} &nbsp; {product.productName} 
                <button className='btn btn-danger' onClick={() => deleteFromCart(product)}>Delete</button>
              </li>
            ))}
          </ul>
          <div className='ms-4 mt-4'>Total Value Worth of Product : <strong>Rs. {totalCost.toFixed(2)}</strong></div>
        </div>
      </div>
    </>
  );
}

export default App;
