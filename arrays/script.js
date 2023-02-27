var backgroundColor = menu.backgroundColor; //transforma a propriedade backGroudnColor em uma variável a parte

//pode-se criar variáveis e acessar valores de outra variavel usando

//EXERCÍCIO//

// Crie um objeto com os seus dados pessoais
var eu = {
  nome: "Roberta",
  sobrenome: "Amaro",

  nomeCompleto() {
    return eu.nome + eu.sobrenome;
  },
};

//outra form de escrever

eu.nomeCompleto = function () {
  return this.nome + this.sobrenome;
};
//this esta represetntando o objeto eu
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raça: ["labrador", "maria"],
  cor: "#000",
  idade: 10,
  latir(pessoa) {
    //precisa-se aplicar uma condição com o parametro pessoa, onde com o argumento homem ele latira, e qualquer outro argumento não ocorre nada
    if (pessoa === "homem") {
      return "irá latir";
    } else {
      return;
    }
  },
};
for (var numero = 1; numero <= 150; numero++) {
  console.log(numero);
}

// --> da onde se inicia a contagem, --> condição, --> incremento
