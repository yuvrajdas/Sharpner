import React from 'react'
import './Navbar.scss'
import cart from '../assets/icons/cart.svg'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container">
                    <div className="navbar-brand header">ReactMeal</div>
                    <button className="navbar-toggler" style={{ position: 'absolute', right: '20px' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
                        <button>
                            <span> <img src={cart} alt="" /></span> <span>Your Cart</span> <span className='total-cart-counter' >3</span>
                        </button>
                    </div>
                </div>
            </nav>
           
        </>
    )
}

export default Navbar