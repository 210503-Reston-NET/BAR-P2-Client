import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookclubdetails',
  templateUrl: './bookclubdetails.component.html',
  styleUrls: ['./bookclubdetails.component.css']
})
export class BookclubdetailsComponent implements OnInit {
  public bookclubs: any;
  constructor() { }

  ngOnInit(): void {
  }

}
