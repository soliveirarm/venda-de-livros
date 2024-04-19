import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  availableBooks = [
    {
      name: 'Eu, Robô',
      author: 'Isaac Asimov',
      cover:
        'https://m.media-amazon.com/images/I/71LJ4k-k9hL._AC_UF1000,1000_QL80_.jpg',
      price: 11.9,
      desc: 'O Pequeno Príncipe é uma obra prima que conduz o leitor a uma viagem de descobertas pela essência humana.',
    },
    {
      name: 'O Pequeno Príncipe',
      author: 'Antoine de Saint-Exupéry',
      cover:
        'https://editoraaleph.com.br/wp-content/uploads/2020/09/Alp_1SiteNovo_4CadastroSimples_EuRobo.png',
      price: 79.9,
      desc: 'Eu, Robô, escrito por Isaac Asimov, é um conjunto de nove contos, interconectados pela Dra. Susan Calvin, que apresenta seus relatos sobre a evolução dos autômatos através do tempo. É nesta obra que Asimov apresentada as célebres Três Leis da Robótica, princípios que regem o comportamento dos autômatos em toda a sua trajetória.',
    },
    {
      name: 'O Fim Da Infância',
      author: 'Arthur C. Clarke',
      cover:
        'https://editoraaleph.com.br/wp-content/uploads/2020/08/Alp_1SiteNovo_4CadastroSimples_FimDaInfancia.png',
      price: 79.9,
      desc: 'Pioneiro ao narrar o contato entre seres humanos e alienígenas, O fim da infância, de Arthur C. Clarke, é um clássico da literatura de ficção científica. Nessa obra o autor faz uma reflexão sobre a natureza do homem e a sua relação com a Terra e o universo.',
    },
    {
      name: 'Sapiens (Nova edição): Uma breve história da humanidade',
      author: 'Yuval Noah Harari',
      cover:
        'https://m.media-amazon.com/images/I/71-ghLb8qML._AC_UF1000,1000_QL80_.jpg',
      price: 54.24,
      desc: 'O planeta Terra tem cerca de 4,5 bilhões de anos. Numa fração ínfima desse tempo, uma espécie entre incontáveis outras o dominou: nós, humanos. Somos os animais mais evoluídos e mais destrutivos que jamais viveram.',
    },
    {
      name: 'As Cavernas De Aço',
      author: 'Isaac Asimov',
      cover:
        'https://editoraaleph.com.br/wp-content/uploads/2020/08/Alp_1SiteNovo_4CadastroSimples_AsCavernasDeAco.png',
      price: 79.9,
      desc: 'Na trama, Os Mundos Siderais, antigas colônias da Terra, possuem rígidas leis de imigração, e não aceitam mais terráqueos em seus planetas. Para agravar a situação, os robôs estão substituindo grande parte da mão de obra trabalhadora na Terra, levando os humanos a perderem seus empregos e privilégios como cidadãos. E no meio desse caos, um brutal assassinato pode comprometer as relações diplomáticas entre esses dois mundos: um roboticista Sideral é morto em sua residência, nos arredores de Nova York, e as suspeitas recaem sobre um terráqueo. Assim entra em cena Elijah Baley, um investigador nova-iorquino encarregado de solucionar o caso antes que a situação fuja de controle. Para cooperar com o caso, os Siderais enviam um parceiro inusitado: um robô.',
    },
    {
      name: 'O Fim Da Eternidade',
      author: 'Isaac Asimov',
      cover:
        'https://editoraaleph.com.br/wp-content/uploads/2020/08/Alp_1SiteNovo_4CadastroSimples_OFimDaEterninade.png',
      price: 69.9,
      desc: 'Originalmente lançada em 1955, O Fim da Eternidade, de Isaac Asimov, é considerada uma das obras-primas da ficção científica e um dos mais importantes romances sobre viagens no tempo. De forma leve e bem-humorada, Asimov realiza questionamentos ainda bastante contemporâneos, como o comodismo do ser humano, sua evolução perante as outras espécies e a busca incessante do controle sobre a vida dos outros. A obra também propõe reflexões sobre o nosso comportamento diante das necessidades pessoais e as situações que envolvem um bem maior.',
    },
    {
      name: 'Existencialismo é um humanismo: Edição de Bolso',
      author: 'Jean-Paul Sartre',
      cover:
        'https://m.media-amazon.com/images/I/81Of28SM4DL._AC_UF1000,1000_QL80_.jpg',
      price: 12.42,
      desc: 'O existencialismo é um humanismo é um texto circunstancial no percurso intelectual de Sartre. Ele antecede um novo ciclo em sua investigação filosófica. As objeções à sua obra, que ele procura inventariar nessa conferência, por mais confusas e hostis que sejam, provocarão novas questões que serão tratadas mais tarde, após um livre amadurecimento, testemunhado, entre outras coisas, por seus escritos póstumos.',
    },
    {
      name: 'Harry Potter  e a Pedra Filosofal: 1',
      author: 'J.K Rowling',
      cover:
        'https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg',
      price: 50.86,
      desc: 'Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.',
    },
    {
      name: 'Harry Potter e a Câmara Secreta: 2',
      author: 'J.K Rowling',
      cover: 'https://m.media-amazon.com/images/I/81jbivNEVML._SL1500_.jpg',
      price: 50.86,
      desc: 'Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.',
    },
    {
      name: 'Harry Potter e o Prisioneiro de Azkaban: 3',
      author: 'J.K Rowling',
      cover: 'https://m.media-amazon.com/images/I/81u+ljPVifL._SL1500_.jpg',
      price: 50.86,
      desc: 'Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.',
    },
  ];

  formatPrice(val: number) {
    return String(val).padEnd(5, '0').replace('.', ',');
  }
}
