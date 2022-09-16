import React from 'react';
import './Modal.css'

function Modal(props) {
  
  return (
    <div className="modal--overlay">
      <div className="modal">
        <h2>{props.success ? "Muito obrigado!" : "Ocorreu um erro"}</h2>
        <p>{props.success ? "Já recebemos a sua mensagem!" : "Por favor, envie novamente."}</p>
        <button className='modal--btn' onClick={() => props.toggleModal(false)}>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;