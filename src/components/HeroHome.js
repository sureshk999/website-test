import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroHome.css';

function HeroHome() {
  return (
    <div className='hero-container'>
      <h1>Dr Suresh Khirwadkar</h1>
      <p>Providing high quality General Practice, Skin Cancer and GP Psychology Services</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--small'
        >
          General Practice
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--small'
        >
          Skin Cancer
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--small'
        >
          GP Psychology
        </Button>
      </div>
    
    </div>
  );
}

export default HeroHome;
