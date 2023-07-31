import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../../pages/homePage';
import social from '../../pages/social.png'; // Import the image
import './../pages/navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='flex fixed top-0 h-24 w-screen m-0 bg-black text-white shadow-lg p-4 space-x-4 overflow-x-auto justify-center'>
        <div style={{ position: 'relative' }}>
        <img src={social} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px', position: 'absolute', top: '10px', left: '10px' }} />
          <ul className='list-none flex items-center space-x-6 text-lg'>
            <li><Link to="/" className="text-xl font-bold nav-link">Home</Link></li>
            <li><Link to="/services" className="text-xl font-bold nav-link">Services</Link></li>
            <li><Link to="/timetable" className="text-xl font-bold nav-link">Portfolio</Link></li>
            <li><Link to="/blogs" className="text-xl font-bold nav-link">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center mt-8">
        <div style={{ backgroundColor: 'darkgrey', padding: '24px' }}>
          <p style={{ textTransform: 'uppercase', fontSize: '60px', color: 'white', margin: '0' }}>
            Take your business to the next level
          </p>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* other route elements */}
      </Routes>
    </div>
  )
  }


export default Navbar;