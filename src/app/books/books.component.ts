import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book'
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name: string = 'Javascript';
  author: string = 'John';
  src: string = 'https://m.media-amazon.com/images/I/310XfS4ZweL._AC_UY218_.jpg';

  name2: string = 'Golang'
  author2: string = 'David';
  src2: string = 'https://m.media-amazon.com/images/I/51+Z8QVq+WL._AC_UY218_.jpg';

  isDisabled: boolean = false;

  handleClick() {
    this.isDisabled = true;
  }

  myName: string = '';
  handleInput(e: any) {
    this.myName = e.target.value;
  }

  myName2: string = 'John';

  isShowing: boolean = true;

  toggleBooks() {
    // if isShowing is true, then make it false
    // or isShowing is false, then make it true
    this.isShowing = !this.isShowing;
  }

  books: Book[] = [];

  cart: Book[] = [];

  addToCart(book: Book) {
    console.log(book);
  }

  constructor(private booksService: BooksService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    console.log('OnInit');
  }

}
