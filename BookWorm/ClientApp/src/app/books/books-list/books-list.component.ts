import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
// import { BookService } from '../book.service';
import { IBook } from '../book';
// import { IBook } from './../book';

// export interface IBook {//   bookAuthor: string;//   bookTitle: string;//   bookPrice: number;//   bookDescription: string;//   publishedOn: Date;//   inStock: string;//   bookReviews: number;//   bookImageUrl: string;//   bookImageUrl2?: string;// }

@Component( {
  // //moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html',
} )
export class BooksListComponent implements OnInit, OnChanges {
  //#region Properties
  animals: any[] = [ 'zebra', 'moose' ];
  imageWidth: number = 100;
  showImage: boolean = true;
  booksInStock: number | string = 2;
  todaysDate: Date = new Date();
  books: IBook[];
  favoriteMessage: string = '';
  errorMessage: string = '';
  //#endregion

  // constructor(private _bookService: BookService) {}

  //#region Methods
  ngOnInit (): void {
    //throw new Error("Method not implemented.");
    console.log( 'Init' + this.booksInStock );
    // this.getBooks();
  }
  ngOnChanges ( changes: SimpleChanges ): void {
    alert( 'new change detected ' + changes );
    console.log( changes );
  }

  // getBooks() {
  //   this._bookService.getBooks().subscribe(
  //     (books:IBook) => (this.books = books), //response => this.books = response,
  //     (error:any) => (this.errorMessage = <any>error)
  //   );
  // }

  changeMethod () {
    this.animals = [ 'cat', 'dog' ];
    alert( 'change method happened ' + this.animals );
  }
  showMessage: string = 'test';
  onNotifyClicked ( message: string ): void {
    this.showMessage = message;
  }

  toggleImage (): void {
    this.showImage = !this.showImage;
  }

  onFavoriteClicked ( message: string ): void {
    this.favoriteMessage = message;
    alert( message );
  }

















  fave: boolean = false;

  @Input() favorite: string;
  @Input() reviews: number;
  @Output() favoriteClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick1 (): void {
    this.favoriteClicked.emit( `The favorite ${ this.favorite } was saved` );
    this.fave = !this.fave;
  }
  isSelected ( fave: boolean ): boolean {
    if ( !fave || !this.fave ) {


      return false;
    }
    if ( fave ) {

      return true;
    }
  }

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick (): void {
    this.notify.emit( `Message from child` );
  }














}
//#endregion
