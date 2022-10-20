import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'javascript',
        author: 'john',
        image: 'https://m.media-amazon.com/images/I/310XfS4ZweL._AC_UY218_.jpg',
        amount: 200,
      },
      {
        name: 'golang',
        author: 'david',
        image: 'https://m.media-amazon.com/images/I/51+Z8QVq+WL._AC_UY218_.jpg',
        amount: 300,
      },
    ];
  }
}
