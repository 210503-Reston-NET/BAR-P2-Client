import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { book, FavoriteBook } from '../models/book';
import { BookClub } from '../models/bookClub';
import { clubPost } from '../models/clubPost';
import { BClub } from '../models/bookClub';
import { followClub } from '../models/bookClub'

@Injectable({
  providedIn: 'root'
})
export class BookclubService {

  
  //host:string='https://bookclubapi.azurewebsites.net/api/BookClub'

  

  constructor(private http:HttpClient) { }

  getBookclubs(){
    return this.http.get(environment.HOSTAPI+"BookClub");

  
  }

  getBooks(){
    return this.http.get(environment.HOSTAPI+"/Book");
  }

  getBookClubById(id:number) : Promise<BookClub>{
  
    return this.http.get<BookClub>(environment.HOSTAPI+"BookClub/"+id).toPromise().then(x=>x);
  }

  GetBCById(id:number) : Promise<BClub>{
    return this.http.get<BClub>(environment.HOSTAPI+"BookClub/"+id).toPromise().then(x=>x);
  }

  GetBookClubByUser(email: string) :Promise<BClub[]> {
    return this.http.get<BClub[]>(environment.HOSTAPI+ 'BookClub/BookClubByUser/' + email).toPromise();
  }

  GetBookClubByName(name: string) :Promise<BClub[]>{
    console.log(name);
    return this.http.get<BClub[]>(environment.HOSTAPI + 'BookClub/BookClubByName/' + name).toPromise();
  }

  AddBookClub(newBookclub:BookClub) : Promise<BookClub>{
  
    return this.http.post<BookClub>(environment.HOSTAPI+"BookClub", newBookclub).toPromise().then(bk => bk);
  }

  AddBC(bookClub: BClub) : Promise<BClub>{
    return this.http.post<BClub>(environment.HOSTAPI+"BookClub", bookClub).toPromise();
  }

  ChangeBookClubBook(id: number, club:BClub): Promise<void>{
    return this.http.put<void>(environment.HOSTAPI+ "BookClub/" + id, club).toPromise();
  }

  AddBook(newBook:book) : Promise<book>{
    console.log(newBook);
    return this.http.post<book>(environment.HOSTAPI+"/Book", newBook).toPromise().then(bk => bk);
  }

  AddFavoriteBooK(favBook:FavoriteBook) : Promise<FavoriteBook>{
    return this.http.post<FavoriteBook>(environment.HOSTAPI+"FavoriteBook", favBook).toPromise().then(bk=> bk);
  }
//clubpost methods bigins here
  AddClubPost(post:clubPost):Promise<clubPost>{
    return this.http.post<clubPost>(environment.HOSTAPI+"ClubPost",post).toPromise();
  }

  GetClubPosts():Promise<clubPost[]>{
    return this.http.get<clubPost[]>(environment.HOSTAPI+"ClubPost").toPromise();
  }
  GetClubPostByBookClub(bookClubId: number): Promise<clubPost[]> {
  
    return this.http.get<clubPost[]>(environment.HOSTAPI+"ClubPost/GetClubPostByBookClub/"+bookClubId).toPromise();
  }

  LikeClubPost(id:number,post:clubPost):Promise<clubPost>{
   // console.log("clic......clubPost..................")
  //console.log( this.http.put<clubPost>(environment.HOSTAPI+"ClubPost/LikeClubPost/"+id,post).toPromise())
    return this.http.put<clubPost>(environment.HOSTAPI+"ClubPost/LikeClubPost/"+id,post).toPromise();
  }
  
  DislikeClubPost(id:number,post:clubPost):Promise<clubPost>{
    return this.http.put<clubPost>(environment.HOSTAPI+"ClubPost/DislikeClubPost/"+id,post).toPromise();
  }

  GetClubPostByID(postId: number) : Promise<clubPost>{
    return this.http.get<clubPost>(environment.HOSTAPI+ "ClubPost/" + postId).toPromise();
  }

  IsFollower(email: string, id: number): Promise<boolean>{
    return this.http.get<boolean>(environment.HOSTAPI + 'FollowClub/GetFollowersByUser/'+email+'/'+id).toPromise();
  }

  Follow(followerUser: followClub): Promise<followClub>{
    return this.http.post<followClub>(environment.HOSTAPI + 'FollowClub', followerUser).toPromise();
  }


  UnFollow(followerEmail: string, clubId: number): Promise<void>{
    return this.http.delete<void>( environment.HOSTAPI + 'FollowClub/DeleteFollowersByUser/'+followerEmail+'/'+clubId ).toPromise();
  }
}
