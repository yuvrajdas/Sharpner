import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Header.scss';
const Header = () => {
  return (
    <>
      <nav className='bg-dark text-white pb-1 pt-3'>
        <ul className='list-unstyled d-flex justify-content-center gap-5'>
          <Link to={'/'} className='links'><li>HOME</li></Link>
          <Link to={'/store'} className='links'><li>STORE</li></Link>
          <Link to={'/about'} className='links'><li>ABOUT</li></Link>
        </ul>
      </nav>
      <section className='header-content'>
      </section>
    </>
  )
}

export default Header