var pessoa = {
  nome: "Luiz", //nome = chave, Luiz = valor
  idade: 65,
};
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

var menu = {
  width: 100,
  height: 100,
  backgroundColor: "#856",
  color: blue,
};

var backgroundColor = menu.backgroundColor;

//pode-se criar variáveis e acessar valores de outra variavel usando
