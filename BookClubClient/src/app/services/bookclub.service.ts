import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { clubPost } from '../models/clubPost';

@Injectable({
  providedIn: 'root'
})
export class BookclubService {

  
  host:string='https://bookclubapi.azurewebsites.net/api/BookClub'

  

  constructor(private http:HttpClient) { }

  //bookclub  methods bigins here

  getBookclubs(){

    return this.http.get(this.host);

  
  }

  //clubpost methods bigins here
  AddClubPost(post:clubPost):Promise<clubPost>{
    return this.http.post<clubPost>(environment .HOSTAPI+"ClubPost",post).toPromise();
  }

  GetClubPosts():Promise<clubPost[]>{
    return this.http.get<clubPost[]>(environment.HOSTAPI+"ClubPost").toPromise();
  }
  GetClubPostByBookClub(bookClubId: number): Promise<clubPost[]> {
    return this.http.get<clubPost[]>(environment .HOSTAPI+"ClubPost/GetClubPostByBookClub/"+bookClubId).toPromise();
  }
 
}
