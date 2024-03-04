import Modal from '@mui/material/Modal';
import '../css/MyCartModal.css'
const MyCartModal = ({ isShow, closeModal }) => {

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
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Content for list item
                            </div>
                            <div className="ms-2 me-auto">
                                <span className="badge text-bg-primary rounded-pill">x 14</span>
                            </div>
                            <div className="fw-bold">$ 56</div>
                        </li>
                    </ol>
                </div>
            </Modal>
        </>
    )
}

export default MyCartModal