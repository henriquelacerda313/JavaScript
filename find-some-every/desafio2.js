/*
1️⃣ find

👉 Encontre o primeiro produto sem estoque

2️⃣ some

👉 Verifique se existe algum produto caro
(defina caro como preco > 1000)

3️⃣ every

👉 Verifique se todos os produtos têm estoque maior que 0
*/


const produtos = [
  { nome: "Notebook", preco: 3000, estoque: 5 },
  { nome: "Mouse", preco: 100, estoque: 0 },
  { nome: "Teclado", preco: 200, estoque: 3 }
];

const SemEstoque = produtos.find(produto => produto.estoque ===0);
console.log(SemEstoque);

const AltoCusto = produtos.some(produto => produto.preco>1000);
console.log(AltoCusto);


const EstoqueZerado = produtos.every(produto => produto.estoque>0);
console.log(EstoqueZerado);
