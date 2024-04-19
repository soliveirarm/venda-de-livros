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

  updateWishlist() {
    localStorage['books'] = JSON.stringify(this.books);
  }

  addBook() {
    this.books.push({ name: this.newBook, acquired: false });
    this.updateWishlist();
    this.newBook = '';
  }

  deleteBook(book: any) {
    let index = this.books.indexOf(book);
    this.books.splice(index, 1);
    this.updateWishlist();
  }

  toggleAcquired(e: any, book: any) {
    if (e.target.checked) book.acquired = true;
    else book.acquired = false;
    this.updateWishlist();
  }
}
