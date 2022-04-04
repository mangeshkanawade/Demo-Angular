import { DeleteBookService } from './delete-book.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public DeleteData: any,
    public DeleteBookService:DeleteBookService  
    ) { }

  ngOnInit(): void {

  }

  DeleteBook() {
    this.DeleteBookService.DeleteBook(this.DeleteData).subscribe((data:any)=>{

    });
  }
}
