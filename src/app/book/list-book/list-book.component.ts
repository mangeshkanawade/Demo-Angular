import { MatSort, MatSortModule } from '@angular/material/sort';
import { Books } from './../../books';
import { ListBookService } from './list-book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sorting: MatSort;

  objBook: Books = new Books();
  BooksCategoriesList : any;
  BooksPublicationsList: any;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] =
    ['BookId', 'BookName', 'BookCategoryName', 'BookPublisherName', 'BookQuantity','Actions'];

  constructor(private ListBookService: ListBookService) { }

  ngOnInit(): void {
    this.ListBookService.BooksList(this.objBook).subscribe((data: any) => {
      this.BooksCategoriesList = data.BooksCategoriesList
      this.BooksPublicationsList = data.BooksPublicationsList;
      this.listData = new MatTableDataSource(data.BooksList);
      this.listData.sort = this.Sorting;
      this.listData.paginator = this.paginator;
      
    });
  }
  SearchBook(){
    console.log(this.objBook);
    this.ListBookService.BooksList(this.objBook).subscribe((data: any) => {
      this.BooksCategoriesList = data.BooksCategoriesList
      this.BooksPublicationsList = data.BooksPublicationsList;
      this.listData = new MatTableDataSource(data.BooksList);
      this.listData.sort = this.Sorting;
      this.listData.paginator = this.paginator;
      
    });
  }

  ResetSearchForm(){
    this.objBook = {} as any;
  }

}
