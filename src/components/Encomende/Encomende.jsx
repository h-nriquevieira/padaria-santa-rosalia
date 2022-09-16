import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import Fisica from './Forms/Fisica'
import Juridica from './Forms/Juridica'

import './Encomende.css'

function Encomende({toggleModal, setMessageSent}) {
  return (
    <div className="encomende" id="encomende">
      <h2 className="encomende--title">Encomende seu coffee break</h2>
      <p className="encomende--subtitle">Preencha os campos abaixo:</p>
      <Tabs.Root defaultValue='fisica'>
        <Tabs.List className='encomende--tab-list'>
          <Tabs.Trigger className='encomende--trigger' value='fisica'>
            <h3>Pessoa Física</h3>
          </Tabs.Trigger>
          <Tabs.Trigger className='encomende--trigger' value='juridica'>
            <h3>Pessoa Jurídica</h3>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className='encomende--content' value='fisica'>
          <Fisica toggleModal={toggleModal} setMessageSent={setMessageSent} />
        </Tabs.Content>
        <Tabs.Content className='encomende--content' value='juridica'>
          <Juridica />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default Encomende;