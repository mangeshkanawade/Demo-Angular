import { Books } from './../../books';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteBookService {
  baseUrl: string = 'https://localhost:44357/api/books/';
  constructor(public http: HttpClient) { }

  DeleteBook(objBook: Books){
    return this.http.post(this.baseUrl + 'DeleteBook', objBook);
  }
}
