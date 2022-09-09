import React from 'react';
import './Aperitivos.css'
import aperitivos from '../../../../assets/menu/aperitivos.jpg'
import aperitivosMobile from '../../../../assets/menu/aperitivos-mobile.jpg'


function Aperitivos() {
  return (
    <div className="aperitivos">
      <div className="palitos">
        <h3>Palito de parmesão/gergelim</h3>
      </div>
      <div className="pates">
        <h3>Patês</h3>
        <p>legumes, peito de peru, ervas finas, frango e ricota</p>
      </div>
      <div className="tabua-de-frios">
        <h3>Tábua de frioss</h3>
        <p>muçarela, presunto, salame, queijo prato e peito de peru</p>
      </div>
      <div className="tabua-de-queijos">
        <h3>Tábua de queijos</h3>
      </div>
      <div className="cesta-paes">
        <h3>Cesta de mini pães</h3>
        <p>(aprox. 35 pães diversos: francês, integral, brioche, bisnaga)</p>
      </div>
      <picture className='quiches--img'>
        <source media="(min-width: 1024px)" srcset={aperitivos} />
        <img src={aperitivosMobile} alt="" />
      </picture>
    </div>
  );
}

export default Aperitivos;