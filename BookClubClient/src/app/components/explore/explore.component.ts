import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { user } from '../../models/user';
import { AuthService } from '@auth0/auth0-angular';
import { BookclubService } from '../../services/bookclub.service';
import { BClub } from 'src/app/models/bookClub';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  Clubs : BClub[] = [];
  userFound: user = {
    userEmail: "",
    password: "",
    address: "",
    pagesRead: 0
  }

  userEmail: string ="";

  constructor(private clubService: BookclubService, private userService: UserService,private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
  }

  UserSearch(email:string){
    this.userService.GetUser(email).then(usr => this.userFound = usr);
  }

  ClubSearch(name: string){
    console.log("test log")
    console.log(name);
    this.clubService.GetBookClubByName(name).then(bks => this.Clubs = bks);
  }

  SearchClub(name: string){
    this.clubService.GetBookClubByName(name).then(bks => this.Clubs = bks);
  }

  GoToAccount(accountEmail : string){
    this.auth.user$.subscribe(
      (profile) => {
        (this.userEmail = profile?.email!);
        this.router.navigate(['Account'], { queryParams: { accountEmail: accountEmail, userEmail: this.userEmail } });
      }
    );
  }

  GoToClub(clubId : number){
    this.auth.user$.subscribe(
      (profile) => {
        (this.userEmail = profile?.email!);
        this.router.navigate(['ClubUser'], { queryParams: { userEmail: this.userEmail, clubId: clubId } });
      }
    );
  }

}
