import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookclubService } from 'src/app/services/bookclub.service';




@Component({
  selector: 'app-bookclub',
  templateUrl: './bookclub.component.html',
  styleUrls: ['./bookclub.component.css']
})
export class BookclubComponent implements OnInit {
  public bookclubs:any;
  constructor(private service:BookclubService,private router:Router) { }

   

  ngOnInit(): void {
    this.service.getBookclubs()
    .subscribe(
      data=>{
      this.bookclubs=data;
      },
      error=>{console.error();
      }
      )
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
