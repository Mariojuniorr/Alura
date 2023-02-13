const form = document.getElementById("novoItem");
const lista = document.querySelector(".lista");
const nomeInserido = document.getElementById("nome").value;
const quantidadeInserida = document.getElementById("quantidade").value;

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  criarElementoAoClicar(nomeInserido, quantidadeInserida);
});

function criarElementoAoClicar(nome, quantidade) {
  const criarLista = document.createElement("li");
  criarLista.classList.add("item");
  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  criarLista.appendChild(numeroItem);
  criarLista.innerHTML += nome;

  lista.appendChild(criarLista);
}