import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from '../../pages/homePage';




const Navbar = () => {
  return (
    <div>
      <nav className='flex fixed top-0 h-24 w-screen m-0 bg-black text-white shadow-lg p-4 space-x-4 overflow-x-auto'>
      <ul className='list-none flex items-center space-x-6 text-lg ml-auto'>
          <li><Link to="/" className="text-xl">Home</Link></li>
          <li><Link to="/services" className="text-xl">Services</Link></li>
          <li><Link to="/timetable" className="text-xl">Portfolio</Link></li>
          <li><Link to="/blogs" className="text-xl">Contact Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/services' element={<servicesPage />} />
        <Route path='/portfolio' element={<portfolioPage />} />
        <Route path='/contactus' element={<contactPage />} />
      </Routes>
    </div>
  )
}

export default Navbar
