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
    console.log(quadrado);
    return lado * lado; //a paalavra reservada this em js, se refere no caso, ao objeto em si (lados), para nao ter que repetir a variavel lados
  },
};

quadrado.lados; // 4
console.log(quadrado.area(5)); // 25
quadrado.perimetro(5); // 20
