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

export async function submitForm(data, setModalOpen, setMessageSent) {
  try {
    const response = await fetch("https://formsubmit.co/ajax/h.nriquevieira@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    setMessageSent(true)
    setModalOpen(true)
  }
  catch {
    setMessageSent(false)
    setModalOpen(true)
  }
}

