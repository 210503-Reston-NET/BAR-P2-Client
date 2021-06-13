import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { GoogleApiService } from '../../services/google-api.service';
import { BookService } from '../../services/book.service';
import { book, FavoriteBook, BookToRead, BooksRead } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  booksToRead: book[] = [];
  favoriteBooks: book[] = [];
  booksRead: book[] = [];
  UserProfile: string | undefined = "";
  userEmail: string = "";
  googleBooks: any;
  bookToAdd: book = {
    id : 0,
    isbn : "",
    title: "",
    author: "",
    categoryName: ''
  };

  favBook : FavoriteBook ={
    id :0,
    email: "",
    isbn: ""
  }

  bookToRead : BookToRead ={
    id :0,
    email: "",
    isbn: ""
  }

  bookRead : BooksRead = {
    id :0,
    user: "",
    isbn: "",
    pages: 0
  }

  constructor(private googleApi: GoogleApiService, private bookapi: BookService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        (this.userEmail = profile?.email!);
        this.bookapi.GetBooksToRead(this.userEmail).then(bk => this.booksToRead = bk);
        this.bookapi.GetBooksRead(this.userEmail).then(bk => this.booksRead = bk);
        this.bookapi.GetFavoriteBooks(this.userEmail).then(bk => this.favoriteBooks = bk);
      }
    );
  }

  BookSearch(serch: string){
    this.googleApi.SearchGoogleBooks(serch)
    .subscribe((data: any) => 
    {
      console.log(data);
      this.googleBooks = data.items;
    })
  }

  AddBookToDB(isbn: string, title:string, author:string, categoryName:string){
    this.bookToAdd.id = 0;
    this.bookToAdd.isbn = isbn;
    this.bookToAdd.title = title;
    this.bookToAdd.author = author;
    this.bookToAdd.categoryName = categoryName;
    console.log(this.bookToAdd);

    this.bookapi.AddBook(this.bookToAdd).then( book => console.log(book));
  }

  AddBookToFavorite(isbn: string, title:string, author:string, categoryName:string, email:string | undefined){
    this.AddBookToDB(isbn, title, author, categoryName);
    
    this.favBook.email = email!;
    this.favBook.isbn = isbn;
    this.bookapi.AddFavoriteBooK(this.favBook).then(bk => console.log(bk));
    this.googleBooks = null;
    this.router.navigate(['Profile'])
  }

  AddBookToRead(isbn: string, title:string, author:string, categoryName:string, email:string | undefined){
    this.AddBookToDB(isbn, title, author, categoryName);
    
    this.bookToRead.email = email!;
    this.bookToRead.isbn = isbn;
    this.bookapi.AddBooKToRead(this.bookToRead).then(bk => console.log(bk));
    this.googleBooks = null;
    this.router.navigate(['Profile'])
  }

  AddBooksRead(isbn: string, title:string, author:string, categoryName:string, pages:number, email:string | undefined){
    this.AddBookToDB(isbn, title, author, categoryName);

    this.bookRead.user = email!;
    this.bookRead.isbn = isbn;
    this.bookRead.pages = pages!;
    console.log("in profile component " + email);
    console.log(this.booksRead);
    this.bookapi.AddBooksRead(this.bookRead).then(bk => console.log(bk));
    this.googleBooks = null;
    this.router.navigate(['Profile'])
  }

}
