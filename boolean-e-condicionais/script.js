var corFavorita = 'Amarelo';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var Roberta = 33
var Luiz = 67

if (Roberta >= Luiz){
    console.log(" É maior")
}else if (Roberta <= Luiz) {
    console.log("É menor")
} else {
    console.log ("É igual")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';  //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy

//p/ verificar

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if( brasil > china) {
    console.log("Brasil tem maior número de habitantes");
}else{
   console.log("China tem maior número de habitantes");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//falso pq a condição && gera false se a condicional tiver um valor falso, mesmo que 
//haja um verdadeiro.


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//Cao pq a condicional or é true mesmo que haja uma condicional false, e resulta
//a última condicional true que aparece

