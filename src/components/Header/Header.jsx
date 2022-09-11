import React from 'react';

import './Header.css'

import logo from '../../assets/logo.png'
import arrow from '../../assets/header--arrow-icon.svg'
import Carousel from './Carousel/Carousel';


function Header() {
  return (
      <header>
        <img src={logo} alt="" className="header--logo" />
        {/* <div className="header--hero">
          <h2>Proporcione a <span className="bold">melhor experiência</span> para seus convidados</h2>
          <button className='header--btn'>
            <img src={arrow} alt="" />
            <a href="">Encomende seu coffee break</a>
          </button>
        </div> */}
        <div className="header--slider">
          <Carousel />
          <div className="header--overlay-text">
            <h2>Proporcione a <span className="bold">melhor experiência</span> para seus convidados</h2>
            <button className='header--btn'>
              <img src={arrow} alt="" />
              <a href="">Encomende seu coffee break</a>
            </button>
          </div>
        </div>
        <div className="header--scrolling-text">
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
          <span>Coffee Break</span>
          <span>•</span>
        </div>
      </header>
  );
}

export default Header;
