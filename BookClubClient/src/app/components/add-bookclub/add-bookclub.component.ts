import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BookClub } from 'src/app/models/bookClub';
import { BookclubService } from 'src/app/services/bookclub.service';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-bookclub',
  templateUrl: './add-bookclub.component.html',
  styleUrls: ['./add-bookclub.component.css']
})
export class AddBookclubComponent implements OnInit {
  newbookClub: BookClub = {
    name: "",
    description: "",
    ISBN: "",
    email: "",
    img: "",
    book: null,
    user: null,
    userEmail: null
  }
  userEmail: string = "";
  googleBooks: any;
  selected: any;
  message: string = "hello world message";
  show: boolean = false;

  selectedItemValue: any;
  constructor(private googleApi: GoogleApiService, private service: BookclubService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
  }

  BookSearch(serch: string) {
    this.googleApi.SearchGoogleBooks(serch)
      .subscribe((data: any) => {
        console.log(data);
        this.googleBooks = data.items;
      })
  }

  AddBookClubClient() {
    this.googleApi.SearchGoogleBookByISBN(this.selected).subscribe((data: any) => {
      this.googleBooks = data.items;
    })
    
  

    this.newbookClub.name = this.googleBooks[0].volumeInfo.title;
    this.newbookClub.ISBN = this.selected;
    this.newbookClub.description;
    this.newbookClub.img = this.googleBooks[0].volumeInfo.imageLinks.smallThumbnail;
    //this.newbookClub.email = email;


    this.service.AddBookClub(this.newbookClub).then(book => console.log(book));

    this.googleBooks = null;


    /*console.log("------------showBookSelected--------")
    console.log(this.newbookClub.description)
    console.log(this.selected)*/

    this.router.navigate(['bookclubs'])
  }


  showBookSelected(selectedItemValue?: string) {
    let isbn = this.selected

    this.googleApi.SearchGoogleBookByISBN(isbn).subscribe((data: any) => {
      this.googleBooks = data.items;
    })
    var imgsrc = this.googleBooks[0].volumeInfo.imageLinks.smallThumbnail
    this.show = true;

    var title = document.getElementById("selection-title");
    title?.remove()

    var div = document.getElementById("selection-div");
    div?.remove()


    var bookNode = document.getElementById("booknodeId");
    var newimg = document.createElement('img');

    newimg.src = imgsrc
    newimg.id = "bookid"
    bookNode?.appendChild(newimg)







  }


}
