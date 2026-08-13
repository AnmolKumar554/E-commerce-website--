import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    
  return (
    <footer className='footer'>
        <div className='footer-col about'>
            <h3>Euler Shop</h3>
            <p>Your one-stop destination for fashion, electronics, and everything in between — quality picked, prices you'll like.</p>
            <div className='socials'>
                <a href='#' aria-label='Facebook'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='#' aria-label='Instagram'><i className="fa-brands fa-instagram"></i></a>
                <a href='#' aria-label='Twitter'><i className="fa-brands fa-twitter"></i></a>
                <a href='#' aria-label='YouTube'><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>

        <div className='footer-col'>
            <h4>Quick Links</h4>
            <Link to={'/about'}>About Us</Link>
            <Link to={'/contact'}>Contact Us</Link>
            <Link to={'/careers'}>Careers</Link>
            <Link to={'/blog'}>Blog</Link>
            
        </div>

        <div className='footer-col'>
            <h4>Customer Service</h4>
            <Link to={'/faq'}>FAQs</Link>
            <Link to={'/shipping'}>Shipping Info</Link>
            <Link to={'/returns'}>Returns & Refunds</Link>
            <Link to={'/track'}>Track Order</Link>
        </div>

        <div className='footer-col newsletter'>
            <h4>Stay Updated</h4>
            <p>Get updates on new arrivals and offers.</p>
            <div className='subscribe-box'>
                <input placeholder='Enter your email'></input>
                <button><i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>

        <div className='footer-bottom'>
            <p>© 2026 Euler Shop. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
