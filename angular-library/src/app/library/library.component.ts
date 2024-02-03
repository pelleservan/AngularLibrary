import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import booksData from '../../assets/books.json';

interface Book {
  author: String;
  country: String;
  imageLink: String;
  language: String;
  link: String;
  pages: Number;
  title: String;
  year: Number;
}

@Component({
    selector: 'app-library',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './library.component.html',
    styleUrl: './library.component.scss'
})

export class LibraryComponent {

  books: Book[] = booksData;
  showDetails: boolean[] = new Array(this.books.length).fill(false);

  toggleDetails(index: number): void {
    this.showDetails[index] = !this.showDetails[index];
  }
}
