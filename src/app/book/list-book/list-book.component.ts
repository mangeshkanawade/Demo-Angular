import { DeleteBookComponent } from './../delete-book/delete-book.component';
import { AddEditBookComponent } from './../add-edit-book/add-edit-book.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Books } from './../../books';
import { ListBookService } from './list-book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  BooksCategoriesList: any;
  BooksPublicationsList: any;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] =
    ['BookId', 'BookName', 'BookCategoryName', 'BookPublisherName', 'BookQuantity', 'Actions'];

  constructor(
    private ListBookService: ListBookService,
    public MatDialog: MatDialog,
    public AddEditBookComponent: AddEditBookComponent
  ) { }

  ngOnInit(): void {
    this.ListBookService.BooksList(this.objBook).subscribe((data: any) => {
      this.BooksCategoriesList = data.BooksCategoriesList
      this.BooksPublicationsList = data.BooksPublicationsList;
      this.listData = new MatTableDataSource(data.BooksList);
      this.listData.sort = this.Sorting;
      this.listData.paginator = this.paginator;

    });
  }
  SearchBook() {
    debugger
    this.ListBookService.BooksList(this.objBook).subscribe((data: any) => {
      this.BooksCategoriesList = data.BooksCategoriesList
      this.BooksPublicationsList = data.BooksPublicationsList;
      this.listData = new MatTableDataSource(data.BooksList);
      this.listData.sort = this.Sorting;
      this.listData.paginator = this.paginator;

    });
  }

  ResetSearchForm() {
    this.objBook = {} as any;
    this.SearchBook();
  }

  AddBookCall() {
    const dialog = this.MatDialog.open(AddEditBookComponent);

    dialog.afterClosed().subscribe(result => {
      console.log('This is Result : ' + result);
      this.SearchBook();
    });
  }
  EditBook(Book: any) {
    this.ListBookService.GetBookDetails(Book).subscribe((data: any) => {
      const dialog = this.MatDialog.open(AddEditBookComponent, {
        data: data        
      });

      dialog.afterClosed().subscribe(result => {
        console.log('This is Result : ' + result);
        this.SearchBook();
      });

    });
  }
  DeleteBook(Book: any) {
    debugger;
    this.ListBookService.GetBookDetails(Book).subscribe((data: any) => {
      const dialog = this.MatDialog.open(DeleteBookComponent, {
        data: data        
      });

      dialog.afterClosed().subscribe(result => {
        console.log('This is Result : ' + result);
        this.SearchBook();
      });

    });
  }
}
