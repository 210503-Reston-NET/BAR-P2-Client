import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookClub } from 'src/app/models/bookClub';
import { BookclubService } from 'src/app/services/bookclub.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-bookclubdetails',
  templateUrl: './bookclubdetails.component.html',
  styleUrls: ['./bookclubdetails.component.css']
})
export class BookclubdetailsComponent implements OnInit {
  public bookclubs:any;
  newbookClub: BookClub= {
    bookClubId:0,
    name: "",
    description: "",
    ISBN: "",
    email: "",
    img: "",
    book: null,
    user: null,
    userEmail: null
  }
  returnbookClub: BookClub= {
    bookClubId:0,
    name: "",
    description: "",
    ISBN: "",
    email: "",
    img: "",
    book: null,
    user: null,
    userEmail: null
  }
  constructor(private service:BookclubService,private router:ActivatedRoute,private notificationService:NotificationService) { }

  ngOnInit(): void {
    let clubId=this.router.snapshot.queryParams['clubId']

    //this.bookclubs=this.service.getBookClubById(clubId);
    this.service.getBookClubById(clubId).then((data:any)=>{
      this.bookclubs=data;
      this.newbookClub.name=this.bookclubs.name
      this.newbookClub.description=this.bookclubs.description
      console.log(this.bookclubs)
    })
    
    
  }

}
