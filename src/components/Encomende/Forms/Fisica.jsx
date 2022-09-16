import React, { useState } from 'react';
import './Forms.css'
import arrow from '../../../assets/form--btn-arrow.svg'
import pin from '../../../assets/location--pin.svg'

function Forms({toggleModal, setMessageSent}) {
  const [entregar, setEntregar] = useState(true);

  function handleSubmit(e) {
    e.preventDefault()
    toggleModal(true);
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="fisica">
      <input required type="text" id='nome' name="nome" placeholder='Nome Completo'/>
      <input required type="email" name="email" id="email" placeholder='E-mail' />
      <input required type="tel" name="telefone" id="telefone" placeholder='Telefone' />
      <div className="fisica--tipo-de-evento">
        <p className='evento--title'>Tipo de evento:</p>
        <div className="radio-and-label">
          <input required type="radio" name="tipo-de-evento" id="aniversario" />
          <label htmlFor="aniversario">Aniversário</label>
        </div>
        <div className="radio-and-label">
          <input required type="radio" name="tipo-de-evento" id="casamento" />
          <label htmlFor="casamento">Casamento</label>
        </div>
        <div className="radio-and-label">
          <input required type="radio" name="tipo-de-evento" id="coffee-break" />
          <label htmlFor="coffee-break">Coffee Break</label>
        </div>
        <div className="radio-and-label">
          <input required type="radio" name="tipo-de-evento" id="coquetel" />
          <label htmlFor="coquetel">Coquetel</label>
        </div>
        <div className="radio-and-label">
          <input required type="radio" name="tipo-de-evento" id="outro" />
          <label htmlFor="outro">Outro:</label>
          <input type="text" name='evento-outro' id='evento-outro' />
        </div>
      </div>
      <div className="quantidade-pessoas">
        <label htmlFor="quantidade">Quantidade de pessoas no evento:</label>
        <input required type="text" name='quantidade' id='quantidade'/>
      </div>
      <textarea name="observacoes" id="observacoes" cols="30" rows="10" placeholder='Observações (opcional):'></textarea>
      <div className="entregar">
        <div className="radio-and-label">
          <input required type="radio" name="entregar-retirar" id="entregar" onChange={() => setEntregar(true)} />
          <label htmlFor="entregar">Entregar meu pedido</label>
        </div>
        <div className="radio-and-label">
          <input required type="radio" name="entregar-retirar" id="retirar" onChange={() => setEntregar(false)}/>
          <label htmlFor="retirar">Retirar meu pedido</label>
        </div>
      </div>
      <div className="atencao">
        <p className="bold">Atenção:</p>
        <p>Caso o evento seja em menos de 48h. entre em contato diretamente pelo (15) 99128-0331, de segunda a sábado das 8h30 às 20h</p>
      </div>

      {entregar ? 
      <div className="address">
        <input required type="text" name="endereco" id="endereco" placeholder='Endereço' />
        <input required type="text" name="numero" id="numero" placeholder='Nº' />
        <input required type="text" name="complemento" id="complemento" placeholder='Complemento' />
        <input required type="text" name="bairro" id="bairro" placeholder='Bairro' />
        <input required type="text" name='cidade' id='cidade' placeholder='Cidade'/>
        <input required type="text" name='cep' id='cep' placeholder='CEP' />
        <p>Taxa de entrega a ser calculada</p>
      </div>
      : 
      <div className="location">
        <input required type="radio" name="unidade" id="unidade1" />
        <label className='unidade-label' htmlFor="unidade1">
          <img src={pin} alt="" />
          <p className="unidade--nome">Loja 1: Rua Aparecida</p>
          <p className="unidade--endereco">R. Aparecida, 322.</p>
        </label>
        <input required type="radio" name="unidade" id="unidade2" />
        <label className='unidade-label' htmlFor="unidade2">
          <img src={pin} alt="" />
          <p className="unidade--nome">Loja 2: Artur Bernardes</p>
          <p className="unidade--endereco">Av. Dr. Artur Bernardes, 856.</p>
        </label>

      </div>
      }

      <button className='form--btn'>
        <span>Enviar</span>
        <img src={arrow} alt="" />
      </button>

      <input type="hidden" name="_next" value="https://reprehensible-potat.000webhostapp.com/?form=success"></input>
    </form>
  );
}

export default Forms;