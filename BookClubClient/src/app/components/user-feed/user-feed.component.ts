import { Component, OnInit } from '@angular/core';
import { userFeed } from '../../models/userFeed';
import { userPost } from '../../models/userPost';
import { UserService } from '../../services/user.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService,private router: Router, public auth: AuthService) { }

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

}
