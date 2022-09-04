import React from 'react';
import './Footer.css'
import pin from '../../assets/footer--pin.svg'

function Footer() {
  return (
    <footer>
      <div className="footer--card">
        <img src={pin} alt="" />
        <p className="footer--location-name">Loja 1: Rua Aparecida</p>
        <p className="footer--location-address">R. Aparecida, 322.</p>
        <p className="footer--location-phone">(15) 3331-2200 | (15) 99128-033</p>
        <p className="footer--location-hours">06:30 às 21:30</p>
      </div>
      <div className="footer--card">
        <img src={pin} alt="" />
        <p className="footer--location-name">Loja 2: Artur Bernardes</p>
        <p className="footer--location-address">Av. Dr. Artur Bernardes, 856.</p>
        <p className="footer--location-phone">(15) 3231-8424</p>
        <p className="footer--location-hours">06:30 às 21:00</p>
      </div>
    </footer>
  );
}

export default Footer;