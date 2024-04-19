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
      name: 'O Pequeno Príncipe',
      author: 'Antoine de Saint-Exupéry',
      cover:
        'https://m.media-amazon.com/images/I/71LJ4k-k9hL._AC_UF1000,1000_QL80_.jpg',
      price: 11.9,
      desc: 'O Pequeno Príncipe é uma obra prima que conduz o leitor a uma viagem de descobertas pela essência humana. Este clássico atemporal de Antoine de Saint-Exupéry narra a história sobre o encontro de um aviador e um menino com “cabelos da cor do ouro”. À medida que o principezinho conta ao aviador sobre sua rotina no asteroide B 612, sua rosa única, o perigo dos baobás, sua raposa e os moradores de outros planetas, um novo olhar sobre a vida e o mundo é revelado.',
    },
  ];
}
