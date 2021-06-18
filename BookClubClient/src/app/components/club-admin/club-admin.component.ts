import { Component, OnInit } from '@angular/core';
import { CPost } from '../../models/clubPost'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ClubpostService } from '../../services/clubpost.service';
import { BookclubService } from '../../services/bookclub.service';
import { BClub } from '../../models/bookClub';
import { BookService } from '../../services/book.service';
import { book } from '../../models/book';
import { GoogleApiService } from '../../services/google-api.service';
import { clubPostLike } from '../../models/clubPost';

@Component({
  selector: 'app-club-admin',
  templateUrl: './club-admin.component.html',
  styleUrls: ['./club-admin.component.css']
})
export class ClubAdminComponent implements OnInit {

  posts: CPost[] = [];
  googleBooks: any;

  post: CPost = {
    clubPostId: 0,
    userEmail: "",
    user: null,
    post: "",
    bookClubId: 0,
    bookClub: null,
    totalLike: 0,
    totalDislike: 0,
    date: "2021-06-15T23:25:22.125"
  }

  club: BClub = {
    bookClubId:0,
    name: "",
    userEmail: "",
    user: null,
    description: "",
    isbn: "",
    book: null,
  }

  Clike: clubPostLike = {
    clubPostLikesId: 0,
    like: false,
    dislike: false,
    clubPostId: 0,
    clubPost: null,
    userEmail: "",
    user: null
  }

  bookToAdd : book = {
    isbn:"",
    title:"",
    author:"",
    categoryId:"",
    category: null,
    imageUrl: ""
  }

  userEmail: string = "";
  clubId: number = 0;

  constructor(private router: Router, private googleApi: GoogleApiService, private bookService: BookService, private clubService: BookclubService, private clubPostService: ClubpostService, private route: ActivatedRoute, public auth: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      profile => {
        this.userEmail = profile.userEmail;
        this.clubId = profile.clubId;
        this.clubPostService.GetClubPostsBYClubId(profile.clubId).then(psts => this.posts = psts);
        this.clubService.GetBCById(profile.clubId).then(bc => {
          this.club = bc;
          this.bookService.GetBookByISBN(bc.isbn).then( bk => this.bookToAdd = bk);
        });
      }

    );
  }

  AddPost(){
    this.post.bookClubId = this.clubId;
    this.post.userEmail = this.userEmail;
    this.clubPostService.AddCP(this.post).then(pst => {
      this.clubPostService.GetClubPostsBYClubId(this.clubId).then(psts => this.posts = psts);
    })
  }

  BookSearch(search: string){
    this.googleApi.SearchGoogleBooks(search)
    .subscribe((data: any) => 
    {
      console.log(data);
      this.googleBooks = data.items;
    })
  }

  ChangeBooK(isbn: string, title:string, author:string, categoryName:string, img: string){
    this.bookToAdd.isbn = isbn;
    this.bookToAdd.title = title;
    this.bookToAdd.author = author;
    this.bookToAdd.categoryId = categoryName;
    this.bookToAdd.imageUrl = img;

    this.bookService.AddBook(this.bookToAdd).then(bk => {
      this.bookToAdd = bk;
      this.club.isbn = bk.isbn;
      this.clubService.ChangeBookClubBook(this.club.bookClubId, this.club);
      this.googleBooks = null;
    })
  }

  DeleteApost(id: number){
    this.clubPostService.DeletePostById(id).then( vd =>{
      this.clubPostService.GetClubPostsBYClubId(this.clubId).then(psts => this.posts = psts);
    });
  }

  GotoComments(id: number){
    this.router.navigate(['Comments'], { queryParams: { UserPostId: 0, ClubPostId: id } });
  }

  Like(clubPostId: number){
    this.Clike.clubPostId = clubPostId;
    this.Clike.userEmail = this.userEmail;
    this.Clike.like = true;
    this.Clike.dislike = false;
    console.log(this.Clike);
    this.clubPostService.LikeDislike(this.Clike).then(lk => 
      {
        console.log(lk);
        this.clubPostService.GetClubPostsBYClubId(this.clubId).then(psts => this.posts = psts);
      });
  }

  Dislike(clubPostId: number){
    this.Clike.clubPostId = clubPostId;
      this.Clike.userEmail = this.userEmail;
      this.Clike.like = false;
      this.Clike.dislike = true;
      console.log(this.Clike);
      this.clubPostService.LikeDislike(this.Clike).then(lk => 
        {
          console.log(lk);
          this.clubPostService.GetClubPostsBYClubId(this.clubId).then(psts => this.posts = psts);
        });
  }

}
