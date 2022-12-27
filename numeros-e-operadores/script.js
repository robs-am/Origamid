



//template strings: concatenan strings com expressões javascripts

var gols = 1000;
// var frase = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols * 2}`

console.log(frase2);

// Declare uma variável contendo uma string

var string = "Uma frase interessante"

// Declare uma variável contendo um número dentro de uma string
 var numeroString = "Eu tenho" + 33 + "anos"

// Declare uma variável com a sua idade

var minhaIdade = 33

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var meuNome = "Roberta"
var meuSobreNome = "Amaro"
var nomeCompleto = meuNome + meuSobreNome //ou
var nomeCompleto = `${meuNome} ${meuSobreNome}` 


console.log(nomeCompleto)

// Coloque a seguinte frase em uma variável: It's time

var agora = "It's time"

// Verifique o tipo da variável que contém o seu nome
var nome = "Roberta"
console.log(typeof nome)