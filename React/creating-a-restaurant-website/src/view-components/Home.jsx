import React from 'react';
import bannerImage from './banner.jpg'; 

const Home = () => {
  return (
    <div>
        <img className='banner' src={bannerImage} alt="Banner" />
    </div>
  );
}

export default Home;
