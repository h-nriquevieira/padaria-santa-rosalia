import React from 'react';
import './Modal.css'

function Modal(props) {
  
  return (
    <div className="modal--overlay">
      <div className="modal">
        
        {props.message ?
        <div>
          <h2>Por favor, aguarde um momento</h2>
        </div>
        :
        <div>
          <h2>{props.success ? "Muito obrigado!" : "Ocorreu um erro"}</h2>
          <p>{props.success ? "Já recebemos a sua mensagem!" : "Por favor, envie novamente."}</p>
        </div>}
        <button className='modal--btn' onClick={() => props.toggleModal(false)}>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;