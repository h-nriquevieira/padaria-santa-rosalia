import React from 'react';
import MenuTabs from '../MenuTabs/MenuTabs';

import './Menu.css'

function Menu() {
  return (
    <section className="menu">
      <h2 className='menu--title'>Cardápio de Eventos</h2>
      <p className='menu--subtitle'>Confira as opções e faça sua encomenda!</p>
      <MenuTabs />
    </section>
  );
}

export default Menu;