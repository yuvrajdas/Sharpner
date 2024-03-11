import Modal from '@mui/material/Modal';
import { useState } from 'react';

const CartModal = ()=>{

    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <>
     <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <div>
        <h1>Modal</h1>
       </div>
      </Modal>
    </>
}

export default CartModal