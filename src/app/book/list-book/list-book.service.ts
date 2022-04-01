import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListBookService {

  baseUrl: string = 'https://localhost:44357/api/books/';
  constructor(private http: HttpClient) { 
    debugger;
  }

  BooksGetList() {
    return this.http.get(this.baseUrl + 'booksgetlist');    
  }

}
