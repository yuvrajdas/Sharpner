import React, { useState } from 'react';
import bannerImage from '../assets/images/meals.jpg';
import { DUMMY_MEALS } from '../dummyMeals';
import AddButton from '../generic-components/AddButton';
import Input from '../generic-components/Input';
const Home = () => {

  return (
    <>
      <div className='wrapper'>
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
        <div className='item-card'>
          {
            DUMMY_MEALS.map((meals) => {
              return (
                <>
                  <div className="item-card_wrapper d-flex justify-content-between w-100">
                    <div className='mt-2'>
                      <div className='item-card__heading'>{meals.name}</div>
                      <div className='item-card__desc'>{meals.description}</div>
                      <div className='item-card__price'> ${meals.price}</div>
                    </div>
                    <div className='d-flex flex-column align-item-center gap-1'>
                     <div>
                      <span>Qty.</span>  <Input />
                     </div>
                      <AddButton />
                    </div>
                  </div>
                  <hr />
                </>
              )
            })
          }
        </div>
      </div>

    </>
  );
}

export default Home;
