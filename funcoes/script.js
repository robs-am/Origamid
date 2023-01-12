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
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//Retorna este resultado, pois a função 'dados' retorna a função outrosDados

outrosDados(); // retorna um erro

//
