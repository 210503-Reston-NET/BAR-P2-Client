import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { clubPost } from '../models/clubPost';
@Injectable({
  providedIn: 'root'
})
export class ClubpostService {

  constructor(private http:HttpClient) { }

  GetClubPosts():Promise<clubPost[]>{
    return this.http.get<clubPost[]>(environment.HOSTAPI+"ClubPost").toPromise();
  }
  //clubpost methods bigins here
  AddClubPost(post:clubPost):Promise<clubPost>{
    return this.http.post<clubPost>(environment.HOSTAPI+"ClubPost",post).toPromise();
  }

 

 

}