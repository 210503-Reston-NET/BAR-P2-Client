import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { GoogleApiService } from '../../services/google-api.service';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';
import { book, FavoriteBook, BookToRead, BooksRead } from '../../models/book';
import { Router } from '@angular/router';
import { userPost } from '../../models/userPost'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userPosts: userPost[] = [];
  booksToRead: book[] = [];
  favoriteBooks: book[] = [];
  booksRead: book[] = [];
  UserProfile: string | undefined = "";
  userEmail: string = "";
  googleBooks: any;
  numBooks: number = 0;
  numPages: number = 0;

  UPost :userPost = {
    userPostId: 0,
    userEmail: "",
    user: null,
    post: "",
    totalLike: 0,
    totalDislike: 0,
    date: "2021-06-15T23:25:22.125"
  }

  bookToAdd: book = {
    isbn : "",
    title: "",
    author: "",
    categoryId: '',
    category: null,
    imageUrl: ''
  };

  favBook : FavoriteBook ={
    favoriteBookId :0,
    userEmail: "",
    user: null,
    isbn: "",
    book: null,
  }

  bookToRead : BookToRead ={
    booksToReadId :0,
    userEmail: "",
    user: null,
    isbn: "",
    book: null,
  }

  bookRead : BooksRead = {
    booksReadId :0,
    userEmail: "",
    user: null,
    isbn: "",
    book: null,
    bookPages: 0
  }

  constructor(private googleApi: GoogleApiService, private bookapi: BookService, private userService: UserService,private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        (this.userEmail = profile?.email!);
        this.bookapi.GetBooksToRead(this.userEmail).then(bk => this.booksToRead = bk);
        this.bookapi.GetBooksRead(this.userEmail).then(bk => {this.booksRead = bk; this.numBooks = bk.length;});
        this.bookapi.GetFavoriteBooks(this.userEmail).then(bk => {this.favoriteBooks = bk; console.log(bk)});
        this.userService.GetUserPost(this.userEmail).then(pst =>{this.userPosts = pst; console.log(pst)});
        this.userService.GetUser(this.userEmail).then(usr => this.numPages = usr.pagesRead);
      }
    );
  }

  MakePost(){
    this.UPost.userEmail = this.userEmail;
    console.log(this.UPost);
    this.userService.MakePost(this.UPost).then(pst => {
      console.log(pst);
      this.userService.GetUserPost(this.userEmail).then(pst => this.userPosts = pst)
    });
    this.router.navigate(['Profile']);
  }

  BookSearch(serch: string){
    this.googleApi.SearchGoogleBooks(serch)
    .subscribe((data: any) => 
    {
      console.log(data);
      this.googleBooks = data.items;
    })
  }

  AddBookToDB(isbn: string, title:string, author:string, categoryName:string, img: string){
    this.bookToAdd.isbn = isbn;
    this.bookToAdd.title = title;
    this.bookToAdd.author = author;
    this.bookToAdd.categoryId = categoryName;
    this.bookToAdd.imageUrl = img;
    console.log("adding book");
    console.log(this.bookToAdd);

    this.bookapi.AddBook(this.bookToAdd).then( book => {console.log("return"); console.log(book);});
  }

  AddBookToFavorite(isbn: string, title:string, author:string, categoryName:string, img: string, email:string | undefined){
    this.bookToAdd.isbn = isbn;
    this.bookToAdd.title = title;
    this.bookToAdd.author = author;
    this.bookToAdd.categoryId = categoryName;
    this.bookToAdd.imageUrl = img;
    console.log("adding book");
    console.log(this.bookToAdd);
    
    this.bookapi.AddBook(this.bookToAdd).then( bk => 
      {
        this.favBook.userEmail = this.userEmail;
        this.favBook.isbn = isbn;
        this.bookapi.AddFavoriteBooK(this.favBook).then(bk => {
          console.log(bk);
          this.bookapi.GetFavoriteBooks(this.userEmail).then(bk => this.favoriteBooks = bk);
        });
        this.googleBooks = null;
      });
}

  AddBookToRead(isbn: string, title:string, author:string, categoryName:string, img: string, email:string | undefined){
    this.bookToAdd.isbn = isbn;
    this.bookToAdd.title = title;
    this.bookToAdd.author = author;
    this.bookToAdd.categoryId = categoryName;
    this.bookToAdd.imageUrl = img;
    console.log("adding book");
    console.log(this.bookToAdd);
    
    this.bookapi.AddBook(this.bookToAdd).then( bk => 
      {
        this.bookToRead.userEmail = this.userEmail;
        this.bookToRead.isbn = isbn;
        this.bookapi.AddBooKToRead(this.bookToRead).then(bk => {
          console.log(bk);
          this.bookapi.GetBooksToRead(this.userEmail).then(bk => this.booksToRead = bk);
        });
        this.googleBooks = null;
      });
    
  }

  AddBooksRead(isbn: string, title:string, author:string, categoryName:string, pages:number, img: string, email:string | undefined){
    this.bookToAdd.isbn = isbn;
    this.bookToAdd.title = title;
    this.bookToAdd.author = author;
    this.bookToAdd.categoryId = categoryName;
    this.bookToAdd.imageUrl = img;
    console.log("adding book");
    console.log(this.bookToAdd);
    this.bookapi.AddBook(this.bookToAdd).then( bk => 
      {
        console.log(bk);
        this.bookRead.userEmail = this.userEmail;
        this.bookRead.isbn = isbn;
        this.bookRead.bookPages = pages!;
        console.log("in profile component " + email);
        console.log(this.booksRead);
        
        this.bookapi.AddBooksRead(this.bookRead).then(bk => {
          console.log(bk);
          this.bookapi.GetBooksRead(this.userEmail).then(bk => {this.booksRead = bk; this.numBooks = bk.length;});
        });
        this.googleBooks = null;
      })
  }

  GotoComments(UserPostId: number){
    this.router.navigate(['Comments'], { queryParams: { UserPostId: UserPostId, ClubPostId: 0 } });
  }
}
