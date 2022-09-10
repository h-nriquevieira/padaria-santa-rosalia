import './MenuTabs.css'
import * as Tabs from '@radix-ui/react-tabs'

import salgados from '../../assets/menu/salgados.svg'
import quiches from '../../assets/menu/quiches.svg'
import aperitivos from '../../assets/menu/aperitivos.svg'
import miniLanches from '../../assets/menu/mini-lanches.svg'
import doces from '../../assets/menu/doces.svg'
import boloCha from '../../assets/menu/bolo-cha.svg'
import bebidas from '../../assets/menu/bebidas.svg'
import Salgados from './TabsContent/Salgados/Salgados'
import Quiche from './TabsContent/Quiche/Quiche'
import Aperitivos from './TabsContent/Aperitivos/Aperitivos'
import MiniLanches from './TabsContent/MiniLanches/MiniLanches'
import Doces from './TabsContent/Doces/Doces'
import BoloCha from './TabsContent/BoloCha/BoloCha'
import Bebidas from './TabsContent/Bebidas/Bebidas'


export default function MenuTabs() {
  return (
    <Tabs.Root defaultValue='salgados' className='menu-tab'>
      <Tabs.List className='menu-tab--categories'>
        <Tabs.Trigger value='salgados' className='menu-tab--trigger'>
          <img src={salgados} alt="" className='menu-tab--icon' />
          <h3>Salgados</h3>
        </Tabs.Trigger>  
        <Tabs.Trigger value='quiches' className='menu-tab--trigger'>
          <img src={quiches} alt="" className='menu-tab--icon' />
          <h3>Quiches</h3>
        </Tabs.Trigger> 
        <Tabs.Trigger value='aperitivos' className='menu-tab--trigger'>
          <img src={aperitivos} alt="" className='menu-tab--icon' />
          <h3>aperitivos</h3>
        </Tabs.Trigger> 
        <Tabs.Trigger value='mini-lanches' className='menu-tab--trigger mini-lanches'>
          <img src={miniLanches} alt="" className='menu-tab--icon' />
          <h3>miniLanches</h3>
        </Tabs.Trigger> 
        <Tabs.Trigger value='doces' className='menu-tab--trigger'>
          <img src={doces} alt="" className='menu-tab--icon' />
          <h3>doces</h3>
        </Tabs.Trigger> 
        <Tabs.Trigger value='bolo-cha' className='menu-tab--trigger bolo-cha'>
          <img src={boloCha} alt="" className='menu-tab--icon' />
          <h3>bolo-cha</h3>
        </Tabs.Trigger> 
        <Tabs.Trigger value='bebidas' className='menu-tab--trigger'>
          <img src={bebidas} alt="" className='menu-tab--icon' />
          <h3>bebidas</h3>
        </Tabs.Trigger>   
      </Tabs.List>
      <Tabs.Content className='menu-tab--content' value='salgados'>
        <Salgados />
      </Tabs.Content>
      <Tabs.Content className='menu-tab--content' value='quiches'>
        <Quiche />
      </Tabs.Content>
      <Tabs.Content className='menu-tab--content' value='aperitivos'>
        <Aperitivos />
      </Tabs.Content>
      <Tabs.Content className='menu-tab--content' value='mini-lanches'>
        <MiniLanches />
      </Tabs.Content>
      <Tabs.Content className='menu-tab--content' value='doces'>
        <Doces />
      </Tabs.Content>
      <Tabs.Content className='menu-tab--content' value='bolo-cha'>
        <BoloCha />
      </Tabs.Content>
      <Tabs.Content className='menu-tab--content' value='bebidas'>
        <Bebidas />
      </Tabs.Content>
    </Tabs.Root>
  )
}