import React from 'react'
import '../css/Navbar.css'
import {Button, Badge} from '@mui/material'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg p-3" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="navbar-brand ms-5" >Navbar</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarColor02">
                    <Badge badgeContent={4} color="secondary">
                    <Button variant="contained">
                        <img src="./icons/cart.svg" alt="" /> &nbsp; My Cart
                    </Button>
</Badge>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar