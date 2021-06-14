import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userPost } from '../../models/userPost'
import { book } from '../../models/book';
import { FollowUser } from '../../models/user';
import { GoogleApiService } from '../../services/google-api.service';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userPosts: userPost[] = [];
  booksToRead: book[] = [];
  favoriteBooks: book[] = [];
  booksRead: book[] = [];
  UserProfile: string | undefined = "";
  userEmail: string = "";
  accountEmail: string = "";
  isFollowing: boolean = true;
  
  followUser: FollowUser = {
    id: 0,
    followerEmail: "",
    followedEmail: ""
  }

  constructor(private googleApi: GoogleApiService, private bookapi: BookService, private userService: UserService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (profile) => {
        (this.userEmail = profile.userEmail);
        (this.accountEmail = profile.accountEmail);
        this.bookapi.GetBooksToRead(this.userEmail).then(bk => this.booksToRead = bk).then(bk => console.log(bk));
        this.bookapi.GetBooksRead(this.userEmail).then(bk => this.booksRead = bk).then(bk => console.log(bk));
        this.bookapi.GetFavoriteBooks(this.userEmail).then(bk => this.favoriteBooks = bk).then(bk => console.log(bk));
        this.userService.GetUserPost(this.userEmail).then(pst => this.userPosts = pst.sort((a, b) => a.id - b.id));
        this.userService.IsFollower(this.userEmail, this.accountEmail).then(bl => this.isFollowing = bl);
      }
    );
  }

  Follow(){
    this.followUser.followerEmail = this.userEmail;
    this.followUser.followedEmail = this.accountEmail;
    this.userService.Follow(this.followUser).then(fl => console.log(fl));
  }

}
