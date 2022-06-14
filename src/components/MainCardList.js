import React from 'react';
import MainCards from './MainCards';
import '../styles.css';

function MainCardList() {
  return (
    <div className='cards'>
      <h1 className='main-cards-intro'>Check out our products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <MainCards
              src='images/Guy.PNG'
              text='Shop Men'
              label='Men'
              path='/products'
            />
            <MainCards
              src='images/HGirl.PNG'
              text='Shop Women'
              label='Women'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainCardList;
