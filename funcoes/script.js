function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

//Parametro x Argumento
//Parametro é quando vc cria a função
//Argumeto são os valores que substitutem os parametros ao executá-la

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu adoro o céu";
  } else if (cor === "verde") {
    return "Eu gosto da natureza";
  } else {
    return "Eu não gosto de cores";
  }
}

addEventListener("click", function () {
  console.log("Oi");
});

// A função possui dois argumentos
// Primeiro é a string 'click' que significa quando o usuário clica em algo
// Segundo é uma função anônima que é executada somente quando o primeiro argumento 'click' ocorre

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(64, 1.7)); //No console.log precisamos colocar os valores do imc, pois ele esta RETORNANDO um valor

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(20, 1.8); //Já aqui, o console.log já esta declaro dentro da função, então basta chamá-la

//imc2(20, 1.8); undefined

//console.log(imc2(1000, 1.8)); //retorna o imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(35));

//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`; //template string faz com que voce nao precise escrever uma constante
}
console.log(totalPaises); // erro, totalPaises não definido, pq a variavel esta dentro da função, ela precisa estar fora do escopo da função

//ESCOPO LÉXICO//

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados(); //aqui vai funcionar pois o return esta dentro do escopo da função
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//Retorna este resultado, pois a função 'dados' retorna a função outrosDados

outrosDados(); // retorna um erro pois a chamada da função esta fora do escopo

//

//EXERCÍCIO//

// Crie uma função para verificar se um valor é Truthy

function verificaTruthy(dado) {
  return !!dado;
}

verificaTruthy();

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}

perimetroQuadrado();

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeSobrenome(nome, sobrenome) {
  return `${nome}` + " " + `${sobrenome}`;
}

nomeSobrenome();

//parametros: nome, sobrenome
//argumento: 'Roberta', 'Amaro'
//chamar o argumento na chamada da função: nomeSobrenome('Roberta', 'Amaro')

// Crie uma função que verifica se um número é par

function Par(numero) {
  var modulo = numero % 2;

  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

Par();

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
