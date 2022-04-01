import { ListBookService } from './list-book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private ListBookService: ListBookService) { }

  ngOnInit(): void {
    this.ListBookService.BooksGetList().subscribe((data:any) =>{
      
    })
  }

}
