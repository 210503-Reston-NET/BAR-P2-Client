import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clubPost } from 'src/app/models/clubPost';
import { BookclubService } from 'src/app/services/bookclub.service';

@Component({
  selector: 'app-view-clubposts',
  templateUrl: './view-clubposts.component.html',
  styleUrls: ['./view-clubposts.component.css']
})
export class ViewClubpostsComponent implements OnInit {
  newpost:clubPost={
    id:0,
    user: '',
    BookClubID: 0,
    totalLike: 0,
    totalDislike: 0,
    post: '',
    BookClubTitle:''
  }
   public clubposts:clubPost[]=[];

  constructor(private service:BookclubService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let clubId=this.router.snapshot.params['clubId']
    this.newpost.BookClubTitle=this.router.snapshot.params['BookClubTitle'];
    this.service.GetClubPostByBookClub(clubId).then(result => { this.clubposts = result });
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
