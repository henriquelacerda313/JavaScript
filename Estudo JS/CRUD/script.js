
/* -----------------------
     FUNÇÕES DE BASE
------------------------*/

// Pegar usuários do localStorage
  function pegarUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

 /* 
 JSON.stringify()

Transforma o objeto/array → texto

JSON.parse()

Transforma o texto → objeto/array real
*/

// Salvar usuários no localStorage
function salvarUsuarios(lista) {
  localStorage.setItem("usuarios", JSON.stringify(lista));
}


/* -----------------------
          CRUD
------------------------*/

// CREATE
function cadastrar() {
  const nome = document.getElementById("nome").value;
  const idade = Number(document.getElementById("idade").value);

  if (!nome || !idade) return alert("Preencha todos os campos!");

  const usuarios = pegarUsuarios();

  usuarios.push({  // push = adiciona um novo item no final do array.
    id: Date.now(),
    nome,
    idade
  });

  salvarUsuarios(usuarios);
  listar();
}

// READ
function listar() {
  const usuarios = pegarUsuarios();
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  usuarios.forEach(user => { // permite executar uma função para cada item da lista.
    lista.innerHTML += `
      <div class="card">
        <b>Nome:</b> ${user.nome}<br>
        <b>Idade:</b> ${user.idade}<br>
        <button onclick="editar(${user.id})">Editar</button>
        <button onclick="remover(${user.id})">Remover</button>
      </div>
    `;
  });
}

// UPDATE
function editar(id) {
  const novoNome = prompt("Novo nome:");
  const novaIdade = prompt("Nova idade:");

  const usuarios = pegarUsuarios();

  const atualizados = usuarios.map(u =>
    u.id === id ? { ...u, nome: novoNome, idade: Number(novaIdade) } : u
  );
  /*
  U  - nome da varialvel
  ? - operador ternário  - funciona com IF de uma linha só 
  ? - condição ? valor_se_verdadeiro : valor_se_falso
  */

  salvarUsuarios(atualizados);
  listar();
}

// DELETE
function remover(id) {
  const usuarios = pegarUsuarios();
  const filtrados = usuarios.filter(u => u.id !== id);

  salvarUsuarios(filtrados);
  listar();
}

/* -----------------------
   LIMPAR BANCO (EXTRA)
------------------------*/
function limparBanco() {
  localStorage.removeItem("usuarios");
  listar();
}

// Atualiza a tela ao abrir
listar();
