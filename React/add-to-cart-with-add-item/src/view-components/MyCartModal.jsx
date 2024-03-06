import Modal from '@mui/material/Modal';
import { Button } from '@mui/material'
import '../css/MyCartModal.css'

const MyCartModal = ({ isShow, closeModal, myCartData, grandTotalPrice }) => {
    
    const placeOrder = () => {
     
        let order = { my_order: myCartData }
        console.log('Order details ', order);
    }

    return (
        <>
            <Modal
                open={isShow}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modal-wrapper ps-3 pe-3'>
                    <div className='modal-heading'>
                        <h4>Your Cart Details</h4>
                        <img src="./icons/close.svg" alt="close_icon" onClick={closeModal} />
                    </div>
                    <ol className="list-group list-group-numbered">
                        {
                            myCartData.map((ele) => {
                                return (<li className="list-group-item d-flex justify-content-between align-items-start" key={ele.id}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{ele.p_name}</div>
                                        {ele.p_description}
                                    </div>
                                    <div className="ms-2 me-auto">
                                        <span className="badge text-bg-primary rounded-pill">x {ele.quantity}</span>
                                    </div>
                                    <div className="fw-bold">$ {ele.sub_total}</div>
                                </li>)
                            })
                        }
                        {
                            myCartData.length<1?<div className='text-center p-5'>
                                You have not added any item
                            </div> :''
                        }
                    </ol>
                    <div className='mt-3 d-flex flex-column align-items-end'>
                        <span>Grand Total <strong>$ {grandTotalPrice}</strong></span>
                        <Button style={{width:'fit-content'}} variant="contained" onClick={placeOrder}>
                            Place Order
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MyCartModal