import React from 'react'
import '../css/store.scss'
import { products } from '../db'

const Store = () => {
  return (
    <>
      <div className="store-wrapper mt-4">
        <h1 className='text-center'>MUSIC</h1>
        <div className="row w-50 m-auto mt-4">
          {products?.map((prod) => {
            return (<>
              <div className="col-md-6 mb-5">
                <div className="content">
                  <h5 className='text-center'>{prod?.title}</h5>
                  <img className='img-hover-zoom img-hover-zoom--xyz' src={prod?.imageUrl} alt="image" />
                  <div className='d-flex justify-content-between action'><span>$ {prod?.price}</span> <button>ADD TO CART</button></div>
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