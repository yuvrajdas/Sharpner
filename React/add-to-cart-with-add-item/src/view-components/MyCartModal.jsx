import Modal from '@mui/material/Modal';
import '../css/MyCartModal.css'
const MyCartModal = ({ isShow, closeModal, myCartData, grandTotalPrice }) => {
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
                    </ol>
                    <div className='mt-2 float-end'>Grand Total <strong>$ {grandTotalPrice}</strong></div>
                </div>
            </Modal>
        </>
    )
}

export default MyCartModal