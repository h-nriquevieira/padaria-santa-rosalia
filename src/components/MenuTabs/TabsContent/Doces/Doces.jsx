import React from 'react';
import './Doces.css'
import docesMobile from '../../../../assets/menu/doces-mobile.jpg'
import doces from '../../../../assets/menu/doces.jpg'


function Doces() {
  return (
    <div className="doces-content">
      <picture>
      <source media="(min-width: 1024px)" srcset={doces} />
        <img src={docesMobile} alt="" />
      </picture>
      <div>
        <p><span className="bold">Mini tortinhas</span> (chocolate, limão, maracujá, morango)</p>
        <p><span className="bold">Mini donut’s</span> (brigadeiro, doce de leite, maracujá)</p>
        <p><span className="bold">Trufa</span> (tradicional, ferrero rocher)</p>
        <p><span className="bold">Lua e Mel</span> (creme, limão e doce de leite)</p>
        <p><span className="bold">Mini bombas</span> (nutella e morango)</p>
        <p><span className="bold">Trouxinha folhada</span> (banana, maçã com canela, chocolate)</p>
        <p><span className="bold">Mini trouxinha</span> (banana, maçã com canela)</p>
        <p><span className="bold">Carolina</span> (brigadeiro, doce de leite, limão e maracujá)</p>
        <p><span className="bold">Mini sonho</span> (creme, doce de leite, brigadeiro)</p>
        <p><span className="bold">Mini gravatinha folhada</span> (doce de leite, beijinho, brigadeiro)</p>
      </div>
      <div>
        <p><span className="bold">Mini mousses 150g</span> (strogonoff de suflair, cheesecake de frutas vermelhas e morango diet)</p>
        <p><span className="bold">Camafeu</span> (nozes, morango, uva)</p>
        <p><span className="bold">Goiabinha de chocolate</span> </p>
        <p><span className="bold">Salada de frutas 150g</span> </p>
        <p><span className="bold">Torta de morango/limão/banoffe</span> - kg</p>
        <p><span className="bold">Brigadeiro de morango (bicho de pé)</span> - kg</p>
        <p><span className="bold">Brigadeiro/brigadeiro ball</span> - kg</p>
        <p><span className="bold">Beiijnho</span> - kg</p>
        <p><span className="bold">Pudim</span> - kg</p>
        <p><span className="bold">Mini tentação de morango</span> - kg</p>
      </div>
    </div>
  );
}

export default Doces;