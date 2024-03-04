import React, { useState } from 'react'
import '../css/Navbar.css'
import { Button, Badge } from '@mui/material'
import MyCartModal from '../view-components/MyCartModal';
 
const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg p-3" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="navbar-brand ms-5" >Navbar</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarColor02">
                        <MyCartModal isShow={showModal} closeModal={() => setShowModal(false)} />
                            <Button variant="contained" onClick={() => setShowModal(true)}>
                            <Badge badgeContent={4} color="secondary">
                                <img src="./icons/cart.svg" alt="" /> 
                                </Badge>
                                &nbsp; My Cart
                            </Button>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar