import React from 'react'
import Header from './components/header/Header'
import Home from './pages/homePage/Home'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Services from './pages/servicesPage/Services'
import Contact from './pages/contactPage/Contact'
import About from './pages/aboutPage/About'
import Portfolio from './pages/portfolioPage/Portfolio'


function App() {
  return (
    <>
      <div class='wrapper'>
        <Header />
        <Home/>
        <Portfolio/>
        
      </div>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
