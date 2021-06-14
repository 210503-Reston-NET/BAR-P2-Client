import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clubPost } from 'src/app/models/clubPost';
import { BookclubService } from 'src/app/services/bookclub.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-clubpost',
  templateUrl: './clubpost.component.html',
  styleUrls: ['./clubpost.component.css']
})
export class ClubpostComponent implements OnInit {
  newpost:clubPost={
    Id:0,
    user: '',
    BookClubID: 0,
    totalLike: 0,
    totalDislike: 0,
    post: '',
    BookClubTitle:''
  }
   public clubposts:clubPost[]=[];

   // the param helps me to decide on enabling creation or view only on the form
   // when it is false then you can only view existing comments
   // the value is sent in routerlink base on the button clicked
   token:boolean=true;

   // I use activate route to get route parameters
  constructor(private service:BookclubService,private router:ActivatedRoute) { }
 

  ngOnInit(): void {
    this.token=this.router.snapshot.params['token']
    let clubId=this.router.snapshot.params['clubId']
    //alert("token-"+this.token)
    console.log(this.token)
    this.newpost.BookClubTitle=this.router.snapshot.params['BookClubTitle'];
    this.service.GetClubPostByBookClub(clubId).then(result => { this.clubposts = result });
     }
onSubmit():void{
  let bookclubId=this.router.snapshot.params['clubId']
  
  this.newpost.BookClubID=bookclubId;
  this.newpost.BookClubTitle=this.router.snapshot.params['BookClubTitle'];
  delete this.newpost.BookClubTitle;
  this.service.AddClubPost(this.newpost).then(result=>{});
}

doLike(clubpostId:number){
alert("thank for your like")
console.log("clic........................")
}

doDisLike(clubpostId:number){
  alert("sorry that you don't like it")
  console.log("clic........................")
}


}
