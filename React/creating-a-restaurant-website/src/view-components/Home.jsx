import React from 'react';
import bannerImage from '../assets/images/meals.jpg'; 

const Home = () => {
  return (
    <>
    <div>
        <img className='banner' src={bannerImage} alt="Banner" />
        <div className='summary-card'>
          <div className='summary-card__heading'>Delicious Food, Delivered To You</div>
          <p className='summary-card__sub-heading'>
            Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p className='summary-card__sub-heading'>
          Our meals feature high-quality, just-in-time cooking by experienced chefs, ensuring every dish exceeds expectations with premium ingredients.
          </p>
        </div>
    </div>

    </>
  );
}

export default Home;
