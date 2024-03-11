import React from 'react'
import '../css/home.scss';
import { tours } from '../db';

const Home = () => {
  return (
    <>
     <h1 className='text-center mt-4'>TOURS</h1>
      <div className='home-wrapper mt-4'>
        <ul>
          {tours?.map((tour) => {
            return (<>
              <li>
                <span className='date'>{tour?.date}</span>
                <span className='title'>{tour?.title}</span>
                <span className='disc'>{tour?.desc}</span>
                <button>BUY TICKET</button>
              </li>
              <hr />
            </>)
          })}
        </ul>
      </div>
    </>
  )
}

export default Home