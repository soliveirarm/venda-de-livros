import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  newBook: string = '';
  books: any = [];

  constructor() {}

  ngOnInit() {
    if (localStorage['books'] != null) {
      this.books = JSON.parse(localStorage['books']);
    }
  }

  addBook() {
    this.books.push({ name: this.newBook, acquired: false });
    localStorage['books'] = JSON.stringify(this.books);
    this.newBook = '';
  }
}
