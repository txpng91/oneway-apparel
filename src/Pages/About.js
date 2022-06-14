import React from 'react';

function About() {
  return (
    <div className='about-page'>
      <div className='image-container'>
        <img className='about-image' src='images/About.jpg' alt='about' />
      </div>
      <div className='article-container'>
        <div className='whole-article'>
          <h1>How We Began</h1>
          <article className='about-article'>In 2018, </article>
        </div>
      </div>
    </div>
  );
}

export default About;
