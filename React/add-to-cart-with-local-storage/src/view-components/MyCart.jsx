
import { useContext, useEffect, useState } from 'react'
import { MyCartContext } from '../App'
import Modal from '@mui/material/Modal';
import '../css/MyCart.scss'
const MyCart = () => {
    const myCart = useContext(MyCartContext);
    const [cartQty, setCartQty] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // updating the cart quantity
    useEffect(() => {
        let totalQty = myCart.reduce((acc, curr) => acc + curr.qty, 0);
        setCartQty(totalQty);
    }, [myCart])

    // Place order added in cart
    const placeOrder = ()=>{
        console.log(myCart);
    }
    return <>
        <div>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <div className='Modal'>
                    <h3>Your Cart</h3>
                    <div className='product-list'>
                        <ul>
                            {myCart.map((product) => {
                                return (
                                    <li key={product.id} style={{marginBottom:'5px'}}>

                                        <div>{product.p_name} </div>
                                        <div>x{product.qty}</div>
                                        <div>Price <strong>$ {product.totalPrice}</strong></div>

                                    </li>
                                );
                            })}
                        </ul>
                        {!myCart.length ? <h4>Your have not added any item </h4> : ''}
                    </div>
                    <button onClick={placeOrder}>Place Order</button>
                </div>
            </Modal>
        </div>
        <div className='cart-wrapper'>
            <div onClick={handleOpen}>
                <span className='cart-count'>{cartQty}</span>
                <img src="./icons/cart.svg" alt="cart_icon" />
            </div>
        </div>
    </>
}

export default MyCart