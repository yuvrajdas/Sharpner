import React, { useContext, useState } from 'react'
import { Button } from '@mui/material'
import { ProductContext } from '../App'
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
    const { AddProduct } = useContext(ProductContext)
    const [product, setProduct] = useState({ id: '', p_name: '', p_description: '', price: 0, sub_total: 0, quantity: 0 })
    const [error, setError] = useState('');

    const productFormHandler = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleSubmit = () => {
        if (product.p_name.trim() === '' || product.p_description.trim() === '' || product.price === 0) {
            setError('Please fill in all the fields.');
            return;
        }
        // Generate a random ID
        const id = uuidv4();
        // Add the ID to the product state
        const newProduct = { ...product, id };
        // Call the AddProduct function with the current product state
        AddProduct(newProduct);
        // Reset the form by setting the product state back to its initial state
        setProduct({ id: '', p_name: '', p_description: '', price: 0, sub_total: 0, quantity: 0 });
        setError('');
    }

    return (
        <>
            <form>
                <div className="row">
                    <div className="col-md-3 mb-2">
                        <input type="text" name='p_name' value={product.p_name} onChange={productFormHandler} className="form-control shadow-none" placeholder='Product Name'  />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input type="text" name='p_description' value={product.p_description} onChange={productFormHandler} className="form-control shadow-none" placeholder='Description'  />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input type="number" name='price' value={product.price} onChange={productFormHandler} className="form-control shadow-none" placeholder='Price'  />
                    </div>
                    <div className="col-md-3 mb-2">
                        <Button variant="contained" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
            {error && <div className="text-danger">{error}</div>}
        </>
    )
}

export default AddProduct
