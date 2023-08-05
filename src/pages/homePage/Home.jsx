import React from 'react';
import './index.css';
import DubaiSVG from './Dubai-color.svg';

const Home = () => {
  return (
    <>
    <div className='home-comp'>
      <div className='left-col'>
        <h1>We help brands like you dominate their competitors with our high quality designs</h1>
      </div>
      <div className='center-text'>
        <h1>Connect your business to the internet and Elevate it!</h1>
      </div>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
     <div className='dubai'>
     <img src={DubaiSVG} alt='Dubai' />
   </div>
   </>
  );
};

export default Home;