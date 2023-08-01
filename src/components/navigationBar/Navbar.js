import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../../pages/homePage';
import '../../pages/navbar.css';
import '../../pages/style.css'; // Import your CSS file for styling



const Navbar = () => {
  return (
    <div>
      <nav className='flex fixed top-0 h-24 w-screen m-0 bg-black text-white shadow-lg p-4 space-x-4 overflow-x-auto justify-center'>
        <div style={{ position: 'relative' }}>
          <ul className='list-none flex items-center space-x-6 text-lg'>
            <li><Link to="/" className="text-xl font-bold nav-link">Home</Link></li>
            <li><Link to="/services" className="text-xl font-bold nav-link">Services</Link></li>
            <li><Link to="/timetable" className="text-xl font-bold nav-link">Portfolio</Link></li>
            <li><Link to="/blogs" className="text-xl font-bold nav-link">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center mt-8">
        <div style={{ backgroundColor: 'darkgrey', padding: '24px', position: 'relative' }}>
          <p style={{ textTransform: 'uppercase', fontSize: '60px', color: 'white', margin: '0' }}>
            Take your business to the next level
          </p>
          {/* Left and Right Buttons */}
          
        </div>
      </div>
            <div className="buttons-container">
        {/* Left and Right Buttons */}
        <button className="button-left"></button>
        <button className="button-right"></button>
      </div>


      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* other route elements */}
      </Routes>

        {/* ThreeBoxes component directly included here */}
        <div className="container"bg-black>
        <div className="box"bg-black>
          <img src="path/to/image1.jpg" alt="Box Image" className="box-image" />
          <p className="box-text">Box 1: Some text below the first image.</p>
        </div>
        <div className="box">
          <img src="path/to/image2.jpg" alt="Box Image" className="box-image" />
          <p className="box-text">Box 2: Some text below the second image.</p>
        </div>
        <div className="box">
          <img src="path/to/image3.jpg" alt="Box Image" className="box-image" />
          <p className="box-text">Box 3: Some text below the third image.</p>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
