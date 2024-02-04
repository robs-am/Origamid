import { Header } from './components/Header';
import { Home } from './components/Home';
import { Produtos } from './components/Produtos';
// // Mostre os dados da aplicação, como aprensetado no vídeo
// // Não utilize CSS externo, use o style para mudar as cores
// // Se a situação estiver ativa pinte de verde, inativa vermelho
// // Se o gasto for maior que 10000 mostre uma mensagem

// const luana = {
//   cliente: "Luana",
//   idade: 27,
//   compras: [
//     { nome: "Notebook", preco: "R$ 2500" },
//     { nome: "Geladeira", preco: "R$ 3000" },
//     { nome: "Smartphone", preco: "R$ 1500" },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: "Mario",
//   idade: 31,
//   compras: [
//     { nome: "Notebook", preco: "R$ 2500" },
//     { nome: "Geladeira", preco: "R$ 3000" },
//     { nome: "Smartphone", preco: "R$ 1500" },
//     { nome: "Guitarra", preco: "R$ 3500" },
//   ],
//   ativa: false,
// };

// import React from "react";

// const App = () => {
//   const dados = mario;

//   const total = dados.compras
//     .map((item) => Number(item.preco.replace("R$ ", "")))
//     .reduce((a, b) => a + b);
//   console.log(total);

//   return (
//     <div>
//       <p>Nome: {dados.cliente}</p>
//       <p>Idade: {dados.idade}</p>
//       <p>
//         Situação:{" "}
//         <span style={{ color: dados.ativa ? "green" : "red" }}>
//           {dados.ativa ? "Ativa" : "Inativo"}
//         </span>
//       </p>
//       <p>Total: R$ {total}</p>
//       {total > 10000 && <p>Você está gastando muito</p>}
//     </div>
//   );
// };

// export default App;

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500

// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const livros = [
//   { nome: 'A Game of Thrones', ano: 1996 },
//   { nome: 'A Clash of Kings', ano: 1998 },
//   { nome: 'A Storm of Swords', ano: 2000 },
// ];

const App = () => {
  /* const dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$', '')) > 1500,
  );
  console.log(dados); */
  // function handleClick(event) {
  //   console.log(event.target);
  // }
  let Pagina = Produtos;
  const { pathname } = window.location;

  if (pathname === '/') {
    Pagina = Home;
  } else {
    Pagina = Produtos;
  }
  return (
    <section>
      <Header />

      <Pagina />
    </section>

    // <ul>
    //   {livros
    //     .filter(({ ano }) => ano <= 2000)
    //     .map(({ nome, ano }) => (
    //       <li key={nome}>
    //         {nome}, {ano}
    //       </li>
    //     ))}
    // </ul>
    // <section>
    //   {dados.map(({ id, nome, preco, cores }) => (
    //     <div key={id}>
    //       <h1>{nome}</h1>
    //       <p>Preço: {preco}</p>
    //       <ul>
    //         {cores.map((cor) => (
    //           <li style={{ backgroundColor: cor, color: 'white' }} key={cor}>
    //             {cor}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}
    // </section>

    //<button onClick={(event) => alert(event.target.innerText)}>Compre</button>
  );
};

export default App;
