import React, { useContext } from 'react'
import AddProduct from './AddProduct';

import '../css/ProductList.css';
import { ProductContext } from '../App';

const ProductList = () => {
    const { crrState:{ allProduct }, AddQty } = useContext(ProductContext)
     console.log(useContext(ProductContext));
    return (
        <>
            <div className="container mt-5">
                <h2 className='text-white mb-3'>Product List</h2>
                <AddProduct />
                <div className="mt-2">
                    {
                        allProduct.map((ele) => {
                            return (
                                <div className='card mb-2' key={ele.id}>
                                    <div className="list-group-item d-flex justify-content-between align-items-center p-2">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{ele.p_name}</div>
                                            <div><i>Price <strong>${ele.price}</strong></i></div>
                                            {ele.p_description}
                                        </div>
                                        <span className="badge text-bg-primary rounded-pill me-2 custom-add" onClick={() => AddQty(1, ele)} >Add 1</span>
                                        <span className="badge text-bg-primary rounded-pill me-2 custom-add" onClick={() => AddQty(2, ele)}>Add 2</span>
                                        <span className="badge text-bg-primary rounded-pill me-2 custom-add" onClick={() => AddQty(3, ele)}>Add 3</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductList