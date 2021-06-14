import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user, FollowUser } from '../models/user';
import { userPost } from '../models/userPost';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host:string='https://bookclubapi.azurewebsites.net/api/User';

  constructor(private http:HttpClient) { }

  AddUser(newUser:user): Promise<user>{
    console.log(newUser);
    return this.http.post<user>(this.host, newUser).toPromise().then(usr => usr);
  }

  GetUser(email:string): Promise<user>{
    return this.http.get<user>('https://bookclubapi.azurewebsites.net/api/User/'+email).toPromise()
  }

  GetUserPost(userEmail:string): Promise<userPost[]>{
    return this.http.get<userPost[]>('https://bookclubapi.azurewebsites.net/api/UserPost/GetUserPostByUser/'+userEmail).toPromise();
  }

  MakePost(post: userPost): Promise<userPost>{
    return this.http.post<userPost>('https://bookclubapi.azurewebsites.net/api/UserPost', post).toPromise().then(pst => pst);
  }

  IsFollower(followerEmail: string, followedEmail: string): Promise<boolean>{
    return this.http.get<boolean>('https://bookclubapi.azurewebsites.net/api/FollowUser/GetFollowersByUser/'+followerEmail+'/'+followedEmail).toPromise();
  }

  Follow(followerUser: FollowUser): Promise<FollowUser>{
    return this.http.post<FollowUser>('https://bookclubapi.azurewebsites.net/api/FollowUser', followerUser).toPromise();
  }

}
