import React, { useState } from 'react';
import './Forms.css'
import arrow from '../../../assets/form--btn-arrow.svg'
import pin from '../../../assets/location--pin.svg'
import { handleData, submitForm } from '../../../services/formServices'

function Forms({toggleModal, setMessageSent, setMessage}) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tel: '',
    tipoDeEvento: '',
    eventoOutro: '',
    quantidadePessoas: '',
    observacoes: '',
    entregar: false,
    endereco: {
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      cep: ''
    },
    unidadeParaRetirar: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    const formatedData = handleData(formData)
    submitForm(formatedData, toggleModal, setMessageSent, setMessage)
  }

  function handleChange(prop, value) {
    setFormData(prevFormData => ({...prevFormData, [prop]: value}))
  }

  function handleChangeEndereco(prop, value) {
    setFormData(prevFormData => ({...prevFormData, endereco: {...prevFormData.endereco, [prop]: value}}))
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="fisica">
      <input onChange={e => handleChange('nome', e.target.value)} required type="text" id='nome' name="nome" placeholder='Nome Completo'/>
      <input onChange={e => handleChange('email', e.target.value)} required type="email" name="email" id="email" placeholder='E-mail' />
      <input onChange={e => handleChange('tel', e.target.value)} required type="tel" name="telefone" id="telefone" placeholder='Telefone' />
      <div className="fisica--tipo-de-evento">
        <p className='evento--title'>Tipo de evento:</p>
        <div className="radio-and-label">
          <input onChange={e => handleChange('tipoDeEvento', e.target.id)} required type="radio" name="tipo-de-evento" id="aniversario" />
          <label htmlFor="aniversario">Aniversário</label>
        </div>
        <div className="radio-and-label">
          <input onChange={e => handleChange('tipoDeEvento', e.target.id)}  required type="radio" name="tipo-de-evento" id="casamento" />
          <label htmlFor="casamento">Casamento</label>
        </div>
        <div className="radio-and-label">
          <input onChange={e => handleChange('tipoDeEvento', e.target.id)}  required type="radio" name="tipo-de-evento" id="coffee-break" />
          <label htmlFor="coffee-break">Coffee Break</label>
        </div>
        <div className="radio-and-label">
          <input onChange={e => handleChange('tipoDeEvento', e.target.id)}  required type="radio" name="tipo-de-evento" id="coquetel" />
          <label htmlFor="coquetel">Coquetel</label>
        </div>
        <div className="radio-and-label">
          <input onChange={e => handleChange('tipoDeEvento', e.target.id)}  required type="radio" name="tipo-de-evento" id="outro" />
          <label htmlFor="outro">Outro:</label>
          <input onChange={e => handleChange('eventoOutro', e.target.value)}  type="text" name='evento-outro' id='evento-outro' />
        </div>
      </div>
      <div className="quantidade-pessoas">
        <label htmlFor="quantidade">Quantidade de pessoas no evento:</label>
        <input onChange={e => handleChange('quantidadePessoas', e.target.value)} required type="text" name='quantidade' id='quantidade'/>
      </div>
      <textarea onChange={e => handleChange('observacoes', e.target.value)} name="observacoes" id="observacoes" cols="30" rows="10" placeholder='Observações (opcional):'></textarea>
      <div className="entregar">
        <div className="radio-and-label">
          <input onChange={e => {handleChange('entregar', true)}} required type="radio" name="entregar-retirar" id="entregar"/>
          <label htmlFor="entregar">Entregar meu pedido</label>
        </div>
        <div className="radio-and-label">
          <input onChange={e => handleChange('entregar', false)} required type="radio" name="entregar-retirar" id="retirar"/>
          <label htmlFor="retirar">Retirar meu pedido</label>
        </div>
      </div>
      <div className="atencao">
        <p className="bold">Atenção:</p>
        <p>Caso o evento seja em menos de 48h. entre em contato diretamente pelo (15) 99128-0331, de segunda a sábado das 8h30 às 20h</p>
      </div>

      {formData.entregar ? 
      <div className="address">
        <input onChange={e => handleChangeEndereco('endereco', e.target.value)} required type="text" name="endereco" id="endereco" placeholder='Endereço' />
        <input onChange={e => handleChangeEndereco('numero', e.target.value)} required type="text" name="numero" id="numero" placeholder='Nº' />
        <input onChange={e => handleChangeEndereco('complemento', e.target.value)} required type="text" name="complemento" id="complemento" placeholder='Complemento' />
        <input onChange={e => handleChangeEndereco('bairro', e.target.value)} required type="text" name="bairro" id="bairro" placeholder='Bairro' />
        <input onChange={e => handleChangeEndereco('cidade', e.target.value)} required type="text" name='cidade' id='cidade' placeholder='Cidade'/>
        <input onChange={e => handleChangeEndereco('cep', e.target.value)} required type="text" name='cep' id='cep' placeholder='CEP' />
        <p>Taxa de entrega a ser calculada</p>
      </div>
      : 
      <div className="location">
        <input onChange={e => handleChange('unidadeParaRetirar', 'Loja 1 - Rua Aparecida')}  required type="radio" name="unidade" id="unidade1" />
        <label className='unidade-label' htmlFor="unidade1">
          <img src={pin} alt="" />
          <p className="unidade--nome">Loja 1: Rua Aparecida</p>
          <p className="unidade--endereco">R. Aparecida, 322.</p>
        </label>
        <input onChange={e => handleChange('unidadeParaRetirar', 'Loja 2 - Artur Bernardes')} required type="radio" name="unidade" id="unidade2" />
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
    </form>
  );
}

export default Forms;