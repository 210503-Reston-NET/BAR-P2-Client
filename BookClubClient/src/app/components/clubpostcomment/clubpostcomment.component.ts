import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clubpostcomment',
  templateUrl: './clubpostcomment.component.html',
  styleUrls: ['./clubpostcomment.component.css']
})
export class ClubpostcommentComponent implements OnInit {
  title = 'datatables';

  posts: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }

}
