import React, { useContext } from 'react'
import AddProduct from './AddProduct';

import '../css/ProductList.css';
import { ProductContext } from '../App';

const ProductList = () => {
    const { state: { allProduct }, AddQty } = useContext(ProductContext)
    return (
        <>
            <div className="container mt-5">
                <h2 className='text-success'>Product List</h2>
                <AddProduct />
                <div className="mt-4">
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
                                        <span className="badge text-bg-primary rounded-pill me-2 custom-add" onClick={() => AddQty(1)} >Add 1</span>
                                        <span className="badge text-bg-primary rounded-pill me-2 custom-add" onClick={() => AddQty(2)}>Add 2</span>
                                        <span className="badge text-bg-primary rounded-pill me-2 custom-add" onClick={() => AddQty(3)}>Add 3</span>
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