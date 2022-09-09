import React from 'react';
import './Quiche.css'
import quiche from '../../../../assets/menu/quiche.jpg'
import quicheMobile from '../../../../assets/menu/quiche-mobile.jpg'

function Quiche() {
  return (
    <div className="quiches">
      <div className="micro-quiches">
        <h3>Micro quiches</h3>
        <p>palmito, frango, peito de peru, tomate seco</p>
      </div>
      <div className="quiche-individual">
        <h3>Quiche Individual</h3>
        <p>palmito, peito de peru, frango, muçarela de búfala com tomate seco, brócolis</p>
      </div>
      <div className="quiche-grande">
        <h3>Quiche grande</h3>
        <p>palmito, peito de peru, frango, muçarela de búfala com tomate seco, brócolis</p>
      </div>
      <picture className="quiches--img">
      <source media="(min-width: 1024px)" srcset={quiche} />
        <img src={quicheMobile} alt="" />
      </picture>
    </div>
  );
}

export default Quiche;