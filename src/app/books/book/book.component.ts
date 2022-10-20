import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  isInCart: boolean = false;

  addToCart() {
    // console.log(this.book);
    this.isInCart = true;
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  myInterval: any = null;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.myInterval = setInterval(() => {
    //   console.log('Hello');
    // }, 1000)
  }

  ngOnDestroy(): void {
    // clearInterval(this.myInterval);
    // console.log({ OnDestroy: 'OnDestroy' });
  }

}
