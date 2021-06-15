import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { user } from '../../models/user';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  userFound: user = {
    email: "",
    password: "",
    address: "",
    pagesRead: 0
  }

  userEmail: string ="";

  constructor(private userService: UserService,private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
  }

  UserSearch(email:string){
    this.userService.GetUser(email).then(usr => this.userFound = usr);
    this.router.navigate(['Explore'])
  }

  GoToAccount(accountEmail : string){
    this.auth.user$.subscribe(
      (profile) => {
        (this.userEmail = profile?.email!);
        this.router.navigate(['Account'], { queryParams: { accountEmail: accountEmail, userEmail: this.userEmail } });
      }
    );
  }

}
