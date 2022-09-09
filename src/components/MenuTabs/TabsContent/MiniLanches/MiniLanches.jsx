import React from 'react';
import './MiniLanches.css'

function MiniLanches() {
  return (
    <div className="mini-lanches-content">
      <div className="mini-hot-dog">
        <h3>Mini hot dog</h3>
        <p>salsicha, batata palha, catchup e mostarda</p>
      </div>
      <div className="monte-seu-lanche">
        <h3>MONTE SEU LANCHE</h3>
        <h3>1. Escolha seu recheio</h3>
        <p><span className="bold">Mortadela</span> (requeijão, mortadela, queijo prato, alface e tomate)</p>
        <p><span className="bold">Peito de peru</span> (requeijão, peito de peru, queijo fresco, alface e cenoura ralada)</p>
        <p><span className="bold">Presunto</span> (requeijão, presunto, queijo prato, tomate e alface)</p>
        <p><span className="bold">Ricota temperada</span> (ricota temperada, peito de peru, tomate e agrião)</p>
        <p><span className="bold">Rosbife</span> (requeijão, rosbife, queijo prato, tomate e alface)</p>
        <p><span className="bold">Salame</span> (requeijão, rosbife, queijo prato, tomate e alface)</p>
        <p><span className="bold">Light</span> (queijo prato, peito de peru, queijo fresco, tomate, alface e cenoura)</p>
        <p><span className="bold">Italiano</span> (catupiry, salame, provolone, queijo prato, tomate e alface)</p>
      </div>
      <div className="monte-seu-lanche--2">
        <p><span className="bold">Queijo branco</span> (catupiry, queijo branco, alface e cenoura ralada)</p>
        <p><span className="bold">Lombo canadense</span> (requeijão, lombo, queijo prato, tomate e alface)</p>
        <p><span className="bold">4 queijos</span> (queijo prato, provolone, gorgonzola, catupiry, tomate seco e alface)</p>
        <p><span className="bold">Copa</span> (catupiry, queijo prato, provolone, copa, alface e tomate)</p>
        <p><span className="bold">Muçarela de búfala</span> (requeijão, muçarela de búfala, tomate seco e manjericão)</p>
      </div>
      <div className="monte-seu-lanche--pao">
        <h3>2. Escolha seu pão</h3>
        <div className="pao--grid">
          <div>
            <p>Baguete tradicional (50g)</p>
            <p>Mini pão de batata (parmesão ou gergelim)</p>
            <p>Mini filão (com ou sem gergelim)</p>
            <p>Mini filão integral</p>
            <p>Mini ciabatta</p>
            <p>Croissant</p>
          </div>
          <div>
            <p>Brioche de mandioquinha</p>
            <p>Mini brioche</p>
            <p>Triângulo integral</p>
            <p>Bisnaga</p>
            <p>Mini wrap (pão sírio)</p>
            <p>Sanduíche de metro (1,8kg – 18 pedaços)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniLanches;