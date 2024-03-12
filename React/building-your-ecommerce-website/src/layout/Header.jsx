import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.scss';
import CartModal from '../view-components/CartModal';
const Header = () => {
  let location = useLocation();
  const [showCartModal, setShowCartModal] = useState(false);
  return (
    <>
      <nav className='bg-dark text-white pb-1 pt-3'>
        <ul className='list-unstyled d-flex justify-content-center gap-5'>
          <Link to={'/'} className='links'><li>HOME</li></Link>
          <Link to={'/store'} className='links'><li>STORE</li></Link>
          <Link to={'/about'} className='links'><li>ABOUT</li></Link>
        </ul>
      </nav>
      <CartModal isCartShow={showCartModal} closeCartModal={()=>setShowCartModal(false)} />
      {location.pathname === '/store' ? <div onClick={()=>setShowCartModal(true)} className='my_cart'>Cart <span>1</span></div> : ''}
      <section className='header-content'>
        <h1 className='display-2 text-white'>The Generics</h1>
        {location.pathname === '/' ? <>
          <div className='sub-heading mt-3'>Get our Latest Album</div>
          <button className="play-btn">►</button>
        </> : ''
        }
      </section>
    </>
  )
}

export default Header