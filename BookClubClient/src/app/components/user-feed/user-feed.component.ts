import { Component, OnInit } from '@angular/core';
import { userFeed } from '../../models/userFeed';
import { userPost, userPostLike } from '../../models/userPost';
import { UserService } from '../../services/user.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import {clubPostLike} from '../../models/clubPost';
import { ClubpostService } from '../../services/clubpost.service'

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  feed: userFeed[] = [];
  userEmail: string = "";
  UPost :userPost = {
    userPostId: 0,
    userEmail: "",
    user: null,
    post: "",
    totalLike: 0,
    totalDislike: 0,
    date: "2021-06-15T23:25:22.125"
  }

  Ulike: userPostLike = {
    userPostLikesId: 0,
    like: false,
    dislike: false,
    userPostId: 0,
    userPost: null,
    userEmail: "",
    user: null
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
  
  constructor(private userService: UserService, private clubPostService: ClubpostService , private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        this.userEmail = profile?.email!;
        this.userService.GetUserFeed(this.userEmail).then(fd => 
          {
            this.feed = fd;
            console.log(this.userEmail);
            console.log(fd);
          })
      });

  }

  MakePost(){
    this.UPost.userEmail = this.userEmail;
    console.log(this.UPost);
    this.userService.MakePost(this.UPost).then(pst => {
      console.log(pst);
      this.userService.GetUserFeed(this.userEmail).then(fd => 
        {
          this.feed = fd;
          console.log(this.userEmail);
          console.log(fd);
        })
    });
  }

  Like(userPostId: number, clubPostId: number)
  {
    if (clubPostId < 1)
    {
      this.Ulike.userPostId = userPostId;
      this.Ulike.userEmail = this.userEmail;
      this.Ulike.like = true;
      this.Ulike.dislike = false;
      console.log(this.Ulike);
      this.userService.LikeDislike(this.Ulike).then(lk => 
        {
          console.log(lk);
          this.userService.GetUserFeed(this.userEmail).then(fd => 
            {
              this.feed = fd;
              console.log(this.userEmail);
              console.log(fd);
            });
        });
    }
    else
    {
      this.Clike.clubPostId = clubPostId;
      this.Clike.userEmail = this.userEmail;
      this.Clike.like = true;
      this.Clike.dislike = false;
      console.log(this.Clike);
      this.clubPostService.LikeDislike(this.Clike).then(lk => 
        {
          console.log(lk);
          this.userService.GetUserFeed(this.userEmail).then(fd => 
            {
              this.feed = fd;
              console.log(this.userEmail);
              console.log(fd);
            });
        });
    }

  }

  Dislike(userPostId: number, clubPostId: number)
  {
    if (clubPostId < 1)
    {
      this.Ulike.userPostId = userPostId;
      this.Ulike.userEmail = this.userEmail;
      this.Ulike.like = false;
      this.Ulike.dislike = true;
      console.log(this.Ulike);
      this.userService.LikeDislike(this.Ulike).then(lk => 
        {
          console.log(lk);
          this.userService.GetUserFeed(this.userEmail).then(fd => 
            {
              this.feed = fd;
              console.log(this.userEmail);
              console.log(fd);
            });
        });
    }
    else
    {
      this.Clike.clubPostId = clubPostId;
      this.Clike.userEmail = this.userEmail;
      this.Clike.like = false;
      this.Clike.dislike = true;
      console.log(this.Clike);
      this.clubPostService.LikeDislike(this.Clike).then(lk => 
        {
          console.log(lk);
          this.userService.GetUserFeed(this.userEmail).then(fd => 
            {
              this.feed = fd;
              console.log(this.userEmail);
              console.log(fd);
            });
        });
    }
  }

  GotoComments(userPostId: number, clubPostId: number){
    if (clubPostId < 1){
      this.router.navigate(['Comments'], { queryParams: { UserPostId: userPostId, ClubPostId: 0 } });
    }
    else{
      this.router.navigate(['Comments'], { queryParams: { UserPostId: 0, ClubPostId: clubPostId } });
    }
  }
}
