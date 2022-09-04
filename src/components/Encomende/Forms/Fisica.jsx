import React from 'react';
import './Forms.css'
import arrow from '../../../assets/form--btn-arrow.svg'

function Forms() {
  return (
    <form className="fisica">
      <input type="text" id='nome' name="nome" placeholder='Nome Completo'/>
      <input type="email" name="email" id="email" placeholder='E-mail' />
      <input type="tel" name="telefone" id="telefone" placeholder='Telefone' />
      <div className="fisica--tipo-de-evento">
        <p className='evento--title'>Tipo de evento:</p>
        <div className="radio-and-label">
          <input type="radio" name="tipo-de-evento" id="aniversario" />
          <label htmlFor="aniversario">Aniversário</label>
        </div>
        <div className="radio-and-label">
          <input type="radio" name="tipo-de-evento" id="casamento" />
          <label htmlFor="casamento">Casamento</label>
        </div>
        <div className="radio-and-label">
          <input type="radio" name="tipo-de-evento" id="coffee-break" />
          <label htmlFor="coffee-break">Coffee Break</label>
        </div>
        <div className="radio-and-label">
          <input type="radio" name="tipo-de-evento" id="coquetel" />
          <label htmlFor="coquetel">Coquetel</label>
        </div>
        <div className="radio-and-label">
          <input type="radio" name="tipo-de-evento" id="outro" />
          <label htmlFor="outro">Outro:</label>
          <input type="text" name='evento-outro' id='evento-outro' />
        </div>
      </div>
      <div className="quantidade-pessoas">
        <label htmlFor="quantidade">Quantidade de pessoas no evento:</label>
        <input type="text" name='quantidade' id='quantidade'/>
      </div>
      <textarea name="observacoes" id="observacoes" cols="30" rows="10" placeholder='Observações (opcional):'></textarea>
      <div className="entregar">
        <div className="radio-and-label">
          <input type="radio" name="entregar-retirar" id="entregar" />
          <label htmlFor="entregar">Entregar meu pedido</label>
        </div>
        <div className="radio-and-label">
          <input type="radio" name="entregar-retirar" id="retirar" />
          <label htmlFor="retirar">Retirar meu pedido</label>
        </div>
      </div>
      <div className="atencao">
        <p className="bold">Atenção:</p>
        <p>Caso o evento seja em menos de 48h. entre em contato diretamente pelo (15) 99128-0331, de segunda a sábado das 8h30 às 20h</p>
      </div>
      <div className="address">
        <input type="text" name="endereco" id="endereco" placeholder='Endereço' />
        <input type="text" name="numero" id="numero" placeholder='Nº' />
        <input type="text" name="complemento" id="complemento" placeholder='Complemento' />
        <input type="text" name="bairro" id="bairro" placeholder='Bairro' />
        <input type="text" name='cidade' id='cidade' placeholder='Cidade'/>
        <input type="text" name='cep' id='cep' placeholder='CEP' />
        <p>Taxa de entrega a ser calculada</p>
      </div>

      <button className='form--btn'>
        <span>Enviar</span>
        <img src={arrow} alt="" />
      </button>
    </form>
  );
}

export default Forms;