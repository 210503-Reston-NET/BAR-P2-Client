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
      console.log("---------------getBookclubs------------")
      console.log(data)
      },
      error=>{console.error();
      }
      )
  }

}
