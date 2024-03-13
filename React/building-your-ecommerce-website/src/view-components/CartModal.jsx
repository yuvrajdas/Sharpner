import Modal from '@mui/material/Modal';
import '../css/cart-modal.scss';
import { CartContext } from '../App';
import { useContext } from 'react';

const CartModal = ({ isCartShow, closeCartModal, cartData }) => {
  const { removeFromCart, purchase } = useContext(CartContext);
  return (
    <>
      <Modal
        open={isCartShow}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='cart_modal'>
          <h3 className='text-center p-2'>CART</h3>
          <div className='close_modal' onClick={() => closeCartModal()}>X</div>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>
                  <span>ITEM</span>
                  <hr />
                </th>
                <th>
                  <span>PRICE</span>
                  <hr />
                </th>
                <th>
                  <span>QUANTITY</span>
                  <hr />
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData.myCart.map((prod) => {
                return (<tr className='mb-2 gap' key={prod.id}>
                  <td> <img src={prod.imageUrl} alt="product_image" /> &nbsp; {prod.title}</td>
                  <td>{prod.price}</td>
                  <td><input type="text" value={1} /> <button onClick={() => removeFromCart(prod)} >REMOVE</button></td>
                </tr>)
              })}
            </tbody>
          </table>
          <div className='mt-3 d-flex justify-content-end pe-4'>
            <h5>Total $ {cartData.grandTotal}</h5>
          </div>
          <div>
            <button onClick={purchase} className='purchase_btn'>PURCHASE</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CartModal;
