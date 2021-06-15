import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BookClub } from 'src/app/models/bookClub';
import { BookclubService } from 'src/app/services/bookclub.service';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-add-bookclub',
  templateUrl: './add-bookclub.component.html',
  styleUrls: ['./add-bookclub.component.css']
})
export class AddBookclubComponent implements OnInit {
  newbookClub: BookClub= {
    name: "",
    description: "",
    ISBN: "",
    email: ""
}
userEmail: string = "";
googleBooks: any;
  constructor(private googleApi: GoogleApiService,private service:BookclubService,private router:Router, public auth: AuthService) { }

  ngOnInit(): void {
  }

  BookSearch(serch: string){
    this.googleApi.SearchGoogleBooks(serch)
    .subscribe((data: any) => 
    {
      console.log(data);
      this.googleBooks = data.items;
    })
  }

  AddBookClub(isbn: string, name:string){
   

    this.newbookClub.name = name;
    this.newbookClub.ISBN = isbn;
    //this.newbookClub.description = description;
    //this.newbookClub.email=email;
  console.log("--------------------")
  console.log(this.newbookClub)
 

    this.service.AddBookClub(this.newbookClub).then( book => console.log(book));

    this.googleBooks = null;
    this.router.navigate(['bookclubs'])
  }

}
