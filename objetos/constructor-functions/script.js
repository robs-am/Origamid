/*  const carro = {
  marca: "Marca",
  preco: "0",
};

carro.marca = "Fiat";

carro.marca = "Chevrolet";

carro.preco = "100.000"; */

/*  function Carro(marcaAtribuida, precoAtribuido) {
  (this.marca = marcaAtribuida), (this.preco = precoAtribuido); //
}

o this se referirá a função carro, que por sua vez é a função contrutora do objeto honda

const honda = new Carro(); //quando colocada a palavra reservada new,a função retornará um objeto.A const então se trabsofma em um objeto. Caso contrário, tornará o undefinied
honda.teste = "oi";
 honda.andar = function () {
  console.log("Andou");
}; 
honda.marca = "honda";
honda.preco = 0;

const fiat = new Carro();

fiat.marca = "fiat";
fiat.preco = 5000;

const chevrolet = new Carro("chevrolet", 3000);

passamos entao os argumentos direto no objeto, pois foram definidos parametros na função construtora

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  console.log(this);
  this.marca = marca;
  console.log(this);
  this.preco = precoFinal;
  console.log(this);
}

const mazda = new Carro2("Mazda", 5000);
const porsche = new Carro2("Porsche", 7000);
   */

const carro = {
  marca: "honda",
  preco: 0,
};
