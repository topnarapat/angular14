import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [CommonModule, FormsModule],
  exports: [BooksComponent],
})
export class BooksModule {}
