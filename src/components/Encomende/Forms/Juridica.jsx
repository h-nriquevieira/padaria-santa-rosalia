import React from 'react';
import './Forms.css'
import arrow from '../../../assets/form--btn-arrow.svg'

function Forms() {
  return (
    <div className="juridica">
      <p>Por favor, entre em contato através do nosso WhatsApp</p>
      <p>(15) 97403-3814</p>
      <button>
        <a href="">Enviar mensagem</a>
        <img src={arrow} alt="" />
      </button>
    </div>

  );
}

export default Forms;