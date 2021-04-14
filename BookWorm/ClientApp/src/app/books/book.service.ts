import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from './book';
import { Observable } from 'rxjs';


@Injectable( {
    "providedIn": "root",
    
})
export class BookService {
    
    private _http: HttpClient;
    public books: IBook[];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Array<IBook>>(  'api/books/books.json' )
        .subscribe( ( result ) => { this.books = result; },
            ( error ) => {return console.error( error );});
  }


  getBooks(): IBook[] {
      return this.books;
  }

  private handleError(error: Response) {
    console.error(error);
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }
}
