import React from 'react';
import './Bebidas.css'
import bebidas from '../../../../assets/menu/bebidas.jpg'
import bebidasMobile from '../../../../assets/menu/bebidas-mobile.jpg'


function Bebidas() {
  return (
    <div className="bebidas-content">
      <picture>
        <source media="(min-width: 1024px)" srcset={bebidas} />
        <img src={bebidasMobile} alt="" />
      </picture>
      <div>
        <p><span className="bold">Refrigerantes 2lts</span></p>
        <p><span className="bold">Sucos Del Valle</span></p>
        <p><span className="bold">Achocolatado Nescau</span></p>
        <p><span className="bold">Suco Xandô Laranja 900ml</span></p>
        <p><span className="bold">Água</span></p>
      </div>
    </div>
  );
}

export default Bebidas;