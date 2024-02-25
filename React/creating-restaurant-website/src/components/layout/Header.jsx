import React from 'react'
import './Header.css';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <>
        <header className='header'>
            <h1>ReactMeal</h1>
            <HeaderCartButton />
        </header>
        <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  )
}

export default Header