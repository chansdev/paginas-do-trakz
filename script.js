const cep = document.querySelector("#cep")
const botao = document.querySelector("#buscar")

async function buscarUser() {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    const dados = await resposta.json()

    document.querySelector("#cidade").textContent = dados.localidade
    document.querySelector("#rua").textContent = dados.logradouro
    document.querySelector("#bairro").textContent = dados.bairro
  } catch(error) {
    console.error("Deu erro: ", error)
  }
}


botao.addEventListener("click", buscarUser)