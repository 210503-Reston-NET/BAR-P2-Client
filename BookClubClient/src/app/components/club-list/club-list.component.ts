import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BClub } from '../../models/bookClub'
import { BookclubService } from '../../services/bookclub.service'
import { GoogleApiService } from '../../services/google-api.service';
import { book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  userEmail: string = "";
  bookClubs: BClub[] = [];
  googleBooks: any;
  title: string = "";

  clubToAdd: BClub = {
    bookClubId:0,
    name: "",
    userEmail: "",
    user: null,
    description: "",
    isbn: "",
    book: null,
  };

  bookToAdd: book = {
    isbn : "",
    title: "",
    author: "",
    categoryId: '',
    category: null,
    imageUrl: ''
  };

  constructor(private bookapi: BookService, private googleApi: GoogleApiService,private clubService: BookclubService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        (this.userEmail = profile?.email!);
        this.clubService.GetBookClubByUser(this.userEmail).then(bcs => 
          {
            console.log(bcs);
            this.bookClubs = bcs;
          });
        this.clubToAdd.userEmail = this.userEmail;
      }
    );
  }

  BookSearch(search: string){
    this.googleApi.SearchGoogleBooks(search)
    .subscribe((data: any) => 
    {
      console.log(data);
      this.googleBooks = data.items;
    })
  }

  SerchValue(isbn: string, title:string, author:string, categoryName:string, img: string){
    this.title = title;
    this.clubToAdd.isbn = isbn;

    this.bookToAdd.isbn = isbn;
    this.bookToAdd.title = title;
    this.bookToAdd.author = author;
    this.bookToAdd.categoryId = categoryName;
    this.bookToAdd.imageUrl = img;

    this.googleBooks = null;
    
  }

  onSubmit(){
    this.bookapi.AddBook(this.bookToAdd).then( book => {
      console.log("return"); 
      console.log(book);
      this.clubService.AddBC(this.clubToAdd).then(bc => {
        console.log(bc);
        this.clubService.GetBookClubByUser(this.userEmail).then(bcs => 
          {
            console.log(bcs);
            this.bookClubs = bcs;
          });
        this.clubToAdd.isbn = '';
        this.clubToAdd.name = '';
        this.clubToAdd.description = '';
      })
    });
  }

  GoToAdminView(id: number){
    this.router.navigate(['ClubAdmin'], { queryParams: { userEmail: this.userEmail, clubId: id } })
  }
}
