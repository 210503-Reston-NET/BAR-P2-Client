import { Component, Host, OnInit, Optional } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books: any;
  //public  bbooks=[{"id":0,"isbn":"test1","title":"test1","author":"test test","categoryName":"horror"},{"id":0,"isbn":"test2","title":"test","author":"test test","categoryName":"horror"},{"id":0,"isbn":"test3","title":"test3","author":"test test3","categoryName":"Romance"},{"id":0,"isbn":"test4","title":"test4","author":"test test4","categoryName":"Romance"},{"id":0,"isbn":"test5","title":"test5","author":"test test5","categoryName":"Romance"}];

  constructor(@Host() @Optional() private bookService: BookService, @Host() @Optional() private router: Router) { }


  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe(
        data => {
          this.books = data;
        },
        error => {
          console.error();
        },

      )



  }

}
