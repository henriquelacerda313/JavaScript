const carro = {
    marca: "ford", 
    ano:2020, 
    cor:"preto"

};

const carroNovo = {
    ...carro, 
    cor:"branco"
};

console.log(carroNovo);