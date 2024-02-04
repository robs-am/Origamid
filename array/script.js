const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];
const carros = new Array('Corola', 'Mustang', 'Honda');
dados[2]('Ford');
dados[1][2].cor; // azul

carros[1]; //Mustang;
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);
console.log(li);
console.log(arrayLi);
