import React from 'react';
import MainCardList from '../components/MainCardList';

function Main() {
  return (
    <div className=''>
      <div className='hero-container bg-dark border-0'>
        <img
          className='main-background'
          src='images/clark-street-mercantile.jpg'
          alt='Background'
          height='750px'
          width='100%'
        />
        <div className='card-img-overlay'>
          <div className='container'>
            <h5 className='card-title'>NEW SEASON ARRIVALS</h5>
            <p className='card-text'>
              This spring starts off great with these products! But one and get
              one 50% off selected items! Don't miss out!
            </p>
          </div>
        </div>
      </div>
      <MainCardList />
    </div>
  );
}

export default Main;
