import { Component, OnInit } from '@angular/core';
import { userFeed } from '../../models/userFeed'
import { UserService } from '../../services/user.service'
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

}
