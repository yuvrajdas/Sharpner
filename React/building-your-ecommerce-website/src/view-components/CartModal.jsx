import Modal from '@mui/material/Modal';
import '../css/cart-modal.scss';

const CartModal = ({ isCartShow, closeCartModal }) => {

  return (
    <>
      <Modal
        open={isCartShow}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='cart_modal'>
          <h3 className='text-center p-2'>CART</h3> 
          <div className='close_modal' onClick={()=>closeCartModal()}>X</div>
          <table style={{   width: '100%' }}>
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
            <tr className='mb-2 gap'>
              <td> <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="product_image" /> &nbsp; ITEM</td>
              <td>14.99</td>
              <td><input type="text" value="2" /> <button>REMOVE</button></td>
            </tr>
            <tr className='mb-2 gap'>
              <td> <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="product_image" /> &nbsp; ITEM</td>
              <td>14.99</td>
              <td><input type="text" value="2" /> <button>REMOVE</button></td>
            </tr>
          </table>
        </div>
      </Modal>
    </>
  );
}

export default CartModal;
