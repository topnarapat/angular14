import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, FormsModule, BooksModule, AppRoutingModule, BrowserAnimationsModule, AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
