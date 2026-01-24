// Pega o botão e o parágrafo pelo ID
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

// Adiciona o evento de clique
botao.addEventListener("click", () => {
  // Verifica o texto atual e alterna
  if (mensagem.textContent === "Esse é o texto original.") {
    mensagem.textContent = "O texto foi alterado com sucesso!";
  } else {
    mensagem.textContent = "Esse é o texto original.";
  }
});