import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ListBookService } from './../list-book/list-book.service';
import { AddEditBookService } from './add-edit-book.service';
import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Books } from 'src/app/books';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

  BooksCategoriesList: any;
  BooksPublicationsList: any;
  objBook: Books = new Books();

  form: FormGroup = new FormGroup({

    BookId: new FormControl(''),
    BookName: new FormControl('', Validators.required),
    BookCategoryId: new FormControl('', Validators.required),
    BookPublisherId: new FormControl('', Validators.required),
    BookQuantity: new FormControl('', [Validators.required, Validators.min(1), Validators.max(150)]),
    IsActive: new FormControl(true)
  });

  constructor(
    public AddEditBookService: AddEditBookService,
    public ListBookService: ListBookService,
    public MatSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public EditData: any
  ) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  ngOnInit(): void {
    this.ListBookService.BooksList(this.objBook).subscribe((data: any) => {
      this.BooksCategoriesList = data.BooksCategoriesList
      this.BooksPublicationsList = data.BooksPublicationsList;
    });
    console.log(this.EditData);
    if (this.EditData) {
      this.form.controls['BookId'].setValue(this.EditData.BookId);
      this.form.controls['BookName'].setValue(this.EditData.BookName);
      this.form.controls['BookCategoryId'].setValue(this.EditData.BookCategoryId);
      this.form.controls['BookPublisherId'].setValue(this.EditData.BookPublisherId);
      this.form.controls['BookQuantity'].setValue(this.EditData.BookQuantity);
      this.form.controls['IsActive'].setValue(this.EditData.IsActive);
    }
  }

  AddBook() {
    if (this.form.valid) {
      this.AddEditBookService.AddBook(this.form.value).subscribe((data: any) => {
        if (data) {
          this.MatSnackBar.open('Book Added', '', this.config)
        }
      });
    }
  }
  BtnClose(){
    
  }
}
