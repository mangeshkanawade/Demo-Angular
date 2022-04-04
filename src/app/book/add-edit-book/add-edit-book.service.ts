import { Books } from './../../books';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEditBookService {
  baseUrl: string = 'https://localhost:44357/api/books/';
  constructor(public http: HttpClient) { }

  AddBook(objBook: Books){
    debugger
    return this.http.post(this.baseUrl + 'AddBook', objBook);
  }
}
