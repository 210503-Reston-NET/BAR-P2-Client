import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clubPost } from 'src/app/models/clubPost';
import { BookclubService } from 'src/app/services/bookclub.service';
import { AuthService } from '@auth0/auth0-angular';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-clubpost',
  templateUrl: './clubpost.component.html',
  styleUrls: ['./clubpost.component.css']
})
export class ClubpostComponent implements OnInit {
  userEmail: string = "";
  newpost:clubPost={
    id:0,
    user: null,
    BookClubID: 0,
    totalLike: 0,
    totalDislike: 0,
    post: '',
    BookClubTitle:'',
    userEmail:'',
    bookClub:null
  }
   public clubposts:clubPost[]=[];

   // the param helps me to decide on enabling creation or view only on the form
   // when it is false then you can only view existing comments
   // the value is sent in routerlink base on the button clicked
   token:boolean=true;

   // I use activate route to get route parameters
  constructor(private service:BookclubService,private activatedRoute:ActivatedRoute,private router:Router, private notificationService:NotificationService,public auth: AuthService) { }
 

  ngOnInit(): void {
    this.auth.user$.subscribe((profile)=>{
      (this.userEmail = profile?.email!);
    })
    

    let clubId=this.activatedRoute.snapshot.params['clubId']
    this.newpost.BookClubTitle=this.activatedRoute.snapshot.params['BookClubTitle'];
    this.service.GetClubPostByBookClub(clubId).then(result => { this.clubposts = result, console.log(this.clubposts )});
    console.log("+++++++++++++++++ ++ngOnInit++++++++++++++++++++++++++")
    console.log(clubId)
    
     }
onSubmit():void{
  let bookclubId=this.activatedRoute.snapshot.params['clubId']
  
  this.newpost.BookClubID=bookclubId;
  this.newpost.userEmail=this.userEmail;
  this.newpost.BookClubTitle=this.activatedRoute.snapshot.params['BookClubTitle'];
  delete this.newpost.BookClubTitle;
  this.service.AddClubPost(this.newpost).then(result=>{console.log(result)});

  this.router.navigate(['ClubPosts'],{queryParams:{'clubId':bookclubId}});
}




doLike(clubpostId:number){
  this.newpost.totalLike=1;
  this.newpost.id=clubpostId;
  this.service.LikeClubPost(clubpostId,this.newpost)
  this.notificationService.showSuccess("Thanks for liking","thanks");

//console.log("clic........................")
}

doDisLike(clubpostId:number){
  this.newpost.totalDislike=1;
  this.newpost.id=clubpostId;
  this.service.DislikeClubPost(clubpostId,this.newpost)
  //alert("sorry that you don't like it")
  console.log("clic......doDisLike..................")
  console.log(clubpostId )
  console.log(  this.service.DislikeClubPost(clubpostId,this.newpost))
  this.notificationService.showWarning("Expenting do better next time","sorry");
}


}
