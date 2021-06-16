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

  ViewClubdetails(id:number, title:string){
    return this.router.navigate(['bookclubdetail'],{ queryParams: { "clubId": id,"BookClubTitle":title } });
  }


}