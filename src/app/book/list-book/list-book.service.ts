import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from 'src/app/books';

@Injectable({
  providedIn: 'root'
})
export class ListBookService {

  baseUrl: string = 'https://localhost:44357/api/books/';
  constructor(private http: HttpClient) { }

  BooksList(objBook: Books) {
    return this.http.post(this.baseUrl + 'BooksList', objBook);
  }

}
