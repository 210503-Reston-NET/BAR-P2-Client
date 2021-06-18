import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { clubPost, clubPostLike, CPost } from '../models/clubPost';
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

  AddCP(post:CPost):Promise<CPost>{
    return this.http.post<CPost>(environment.HOSTAPI+"ClubPost",post).toPromise();
  }

  LikeDislike(like: clubPostLike): Promise<void>{
    return this.http.post<void>(environment.HOSTAPI + 'ClubPostLikes', like).toPromise();
  }
 
  GetClubPostById(id: number): Promise<CPost>{
    return this.http.get<CPost>(environment.HOSTAPI + 'ClubPost/' + id).toPromise();
  }

  GetClubPostsBYClubId(id: number): Promise<CPost[]>{
    return this.http.get<CPost[]>(environment.HOSTAPI + 'ClubPost/GetClubPostByBookClub/' + id).toPromise();
  }

  DeletePostById(id: number):Promise<void>{
    return this.http.delete<void>(environment.HOSTAPI + 'ClubPost/' + id).toPromise();
  }

}
