import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComment, ClubComment } from '../models/comment'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  AddUserComment(newComment: UserComment) : Promise<UserComment>{
    return this.http.post<UserComment>(environment.HOSTAPI + 'UserComment', newComment).toPromise();
  }

  GetUserComment(postId: number) : Promise<UserComment[]>{
    return this.http.get<UserComment[]>(environment.HOSTAPI + 'UserComment/GetUserPostComments/' + postId).toPromise();
  }

  AddClubComment(newComment: ClubComment) : Promise<ClubComment>{
    return this.http.post<ClubComment>(environment.HOSTAPI + 'ClubComment', newComment).toPromise();
  }

  GetClubComment(postId: number) : Promise<ClubComment[]>{
    return this.http.get<ClubComment[]>(environment.HOSTAPI + 'ClubComment/GetUserPostComments/' + postId).toPromise();
  }
}
