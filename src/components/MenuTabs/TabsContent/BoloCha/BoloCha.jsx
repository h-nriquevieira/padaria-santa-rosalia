import React from 'react';
import './BoloCha.css'
import bolo from '../../../../assets/menu/bolo-cha.jpg'
import boloMobile from '../../../../assets/menu/bolo-cha-mobile.jpg'


function BoloCha() {
  return (
    <div className="bolo-cha-content">
      <picture>
        <source media="(min-width: 1024px)" srcset={bolo} />
        <img src={boloMobile} alt="" />
      </picture>
      <div>
        <p><span className="bold">Indiano</span></p>
        <p><span className="bold">Cenoura com cobertura de chocolate</span></p>
        <p><span className="bold">Chocolate</span></p>
        <p><span className="bold">Laranja</span></p>
        <p><span className="bold">Iogurte</span></p>
        <p><span className="bold">Maçã com canela</span></p>
        <p><span className="bold">Fubá com goiabada</span></p>
        <p><span className="bold">Toalha felpuda</span> (cocada cremosa)</p>
        <p><span className="bold">Churros</span></p>
        <p><span className="bold">Fubá</span></p>
        <p><span className="bold">Formigueiro</span></p>
      </div>
    </div>
  );
}

export default BoloCha;