var pessoa = {
  nome: "Luiz", //nome = chave, Luiz = valor
  idade: 65,
};

pessoa.nome
//objeto = var pessoa
//propriedade = chave(ex.: nome) + valor (ex.: "Luiz)"
// propriedade é tudo que esta contido dentro das chaves

//Acessando o valor da propriedade: objeto.chave ex.: pessoa.nome = "Luiz"

//METODOS//

//É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4, //propriedade
  area: function (lado) {
    //método, pois o valor dela é a função da area do quadrado

    return lado * lado;
  },

  perimetro: function (lado) {
    return this.lados * lado; //this é uma palavra reservada que se refere a 'isso', no caso de um objeto, ele irá se referir ao proprio objeto em si
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

//quadrado = objeto
//lados = propriedade
//area e perimetro: metodos

/* 
ex.: console.log -> sempre que tiver um ponto, o que está antes dele é um objeto. E Log é um método, pois está executando uma função */

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2; //o this vai se referir ao height do objeto menu. se retirarmos o this ele se referira ao height do escopo global, no caso 120

  }


}

menu.metadeHeight(); // 25
// sem o this, seria 60




var backgroundColor = menu.backgroundColor; //transforma a propriedade backGroudnColor em uma variável a parte

//pode-se criar variáveis e acessar valores de outra variavel usando


//EXERCÍCIO//

// Crie um objeto com os seus dados pessoais
var eu = {
  nome: "Roberta",
  sobrenome: "Amaro",
  idade: "33",
  cidade: "Rio de Janeiro",
  nomeCompleto() {
    return this.nome + this.cidade
  }
}
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo


// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 800;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
 var cachorro ={
  raça: 'labrador', 'maria',
  cor: '#000',
  idade:10,
  lateQuandoHomemPssa: true
 }