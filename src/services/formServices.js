export function handleData(data) {
  const formatedData = {
    "Nome": data.nome,
    "Email": data.email,
    "Telefone": data.tel,
    "Tipo de evento": data.tipoDeEvento == 'outro' ? `${data.tipoDeEvento}: ${data.eventoOutro}` : data.tipoDeEvento,
    "Quantidade de pessoas": data.quantidadePessoas,
    "Observações": data.observacoes,
    "Entregar ou retirar": data.entregar ? "Entregar" : "Retirar",
    "Endereço para entrega": `${data.endereco.endereco}, Nº ${data.endereco.numero} ${data.endereco.complemento}, Bairro ${data.endereco.bairro}, ${data.endereco.cidade}. CEP ${data.endereco.cep}`,
    "Unidade para retirada": data.unidadeParaRetirar
  }

  return formatedData
}

export async function submitForm(data, setModalOpen, setMessageSent, setMessage) {
  try {
    setMessage(true)
    setModalOpen(true)
    const response = await fetch("https://formsubmit.co/ajax/eventos@santarosalia.com.br", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    setMessage(false)
    setMessageSent(true)
    setModalOpen(true)
  }
  catch {
    setMessage(false)
    setMessageSent(false)
    setModalOpen(true)
  }
}

