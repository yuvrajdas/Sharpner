import React, { useContext } from 'react'
import '../css/store.scss'
import { products } from '../db'
import { CartContext } from '../App'
const Store = () => {
  const { cartState, addToCart } = useContext(CartContext);
  console.log(cartState);
  return (
    <>
      <div className="store-wrapper mt-4">
        <h1 className='text-center'>MUSIC</h1>
        <div className="row w-50 m-auto mt-4">
          {products?.map((prod) => {
            return (<>
              <div className="col-md-6 mb-5" key={prod.id}>
                <div className="content">
                  <h5 className='text-center'>{prod?.title}</h5>
                  <img className='img-hover-zoom img-hover-zoom--xyz' src={prod?.imageUrl} alt="image" />
                  <div className='d-flex justify-content-between action'><span>$ {prod?.price}</span> <button onClick={()=>addToCart(prod)}>ADD TO CART</button></div>
                </div>
              </div>
            </>)
          })}
        </div>
      </div>
    </>
  )
}

export default Store