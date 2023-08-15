import React from 'react'
import './footer.css'

const Footer = () =>  {
  return (
    <footer>
      <a href="#" className='footer_logo'>EGATOR</a>

      <ul className='permalinks' >
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirence</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>2023 &copy; All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer