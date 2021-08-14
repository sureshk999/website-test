import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-header'>
        <p className='footer-header'>
          Proudly providing high quality General Practice, Skin Cancer Care, and GP Psychology Services
        </p>
      </section>
      <section className='footer-location'>
        <p className='footer-location-heading'>
          Consulting Locations
        </p>
        <p className='footer-location-text'>
          <ul>Kenmore General Practice
          900 Moggill Road
          Kenmore 4069</ul>
          <ul>Out of hours Telehealth</ul>
        </p>
      </section>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to Newsletter
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>
            <Link to='/about'>About
            </Link>
            </h2>
          </div>
          <div class='footer-link-items'>
          <h2>
            <Link to='/contact'>Contact
            </Link>
            </h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <h2>
            <Link to='/blog'>Blog
            </Link>
            </h2>
          </div>
          <div class='footer-link-items'>
          <h2>
            <Link to='/youtube'>Videos
            </Link>
            </h2>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            
          </div>
          <small class='website-rights'>Dr Suresh Khirwadkar © 2021</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;