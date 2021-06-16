import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clubpostcomment',
  templateUrl: './clubpostcomment.component.html',
  styleUrls: ['./clubpostcomment.component.css']
})
export class ClubpostcommentComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
      });

  }

}
