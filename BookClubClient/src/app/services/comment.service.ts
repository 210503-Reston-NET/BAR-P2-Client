import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comment } from '../models/comment'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  AddComment(newComment: comment) : Promise<comment>{
    return this.http.post<comment>(environment.HOSTAPI + 'Comment', newComment).toPromise();
  }
}
