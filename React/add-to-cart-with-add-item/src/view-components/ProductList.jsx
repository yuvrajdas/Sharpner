import React from 'react'
import AddProduct from './AddProduct';
import '../css/ProductList.css';

const ProductList = () => {
    return (
        <>
            <div className="container mt-5">
                <h2 className='text-success'>Product List</h2>
                <AddProduct />
                <div className="mt-4">
                    <div className='card mb-2'>
                        <div class="list-group-item d-flex justify-content-between align-items-center p-2">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Subheading</div>
                                <div><i>Price <strong>$45</strong></i></div>
                                Content for list item
                            </div>
                            <span class="badge text-bg-primary rounded-pill me-2 custom-add">Add 1</span>
                            <span class="badge text-bg-primary rounded-pill me-2 custom-add">Add 2</span>
                            <span class="badge text-bg-primary rounded-pill me-2 custom-add">Add 3</span>
                        </div>
                    </div>
                    <div className='card mb-2'>
                        <div class="list-group-item d-flex justify-content-between align-items-center p-2">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Subheading</div>
                                <div><i>Price <strong>$45</strong></i></div>
                                Content for list item
                            </div>
                            <span class="badge text-bg-primary rounded-pill me-2 custom-add">Add 1</span>
                            <span class="badge text-bg-primary rounded-pill me-2 custom-add">Add 2</span>
                            <span class="badge text-bg-primary rounded-pill me-2 custom-add">Add 3</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList