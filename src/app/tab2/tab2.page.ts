import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  newBook: string = '';
  books: any = [];
  localSave: any = localStorage.getItem('books');

  constructor() {}

  addBook() {
    this.books.push(this.newBook);
    this.newBook = '';
  }
}
