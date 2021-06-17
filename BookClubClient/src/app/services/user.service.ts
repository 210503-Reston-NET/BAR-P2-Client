import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user, FollowUser } from '../models/user';
import { userPost } from '../models/userPost';
import { UserComment } from '../models/comment';
import { environment } from 'src/environments/environment';

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
    return this.http.get<user>(environment.HOSTAPI + 'User/'+email).toPromise()
  }

  GetUserPost(userEmail:string): Promise<userPost[]>{
    return this.http.get<userPost[]>(environment.HOSTAPI + 'UserPost/GetUserPostByUser/'+userEmail).toPromise();
  }

  MakePost(post: userPost): Promise<userPost>{
    return this.http.post<userPost>(environment.HOSTAPI +'UserPost', post).toPromise().then(pst => pst);
  }

  IsFollower(followerEmail: string, followedEmail: string): Promise<boolean>{
    return this.http.get<boolean>(environment.HOSTAPI + 'FollowUser/GetFollowersByUser/'+followerEmail+'/'+followedEmail).toPromise();
  }

  Follow(followerUser: FollowUser): Promise<FollowUser>{
    return this.http.post<FollowUser>(environment.HOSTAPI + 'FollowUser', followerUser).toPromise();
  }

  GetComments(UserPostId: number): Promise<UserComment[]>{
    return this.http.get<UserComment[]>(environment.HOSTAPI + 'Comment/GetUserPostComments/'+ UserPostId).toPromise();
  }

  GetPostById(postId: number): Promise<userPost>{
    return this.http.get<userPost>(environment.HOSTAPI + 'UserPost/' + postId).toPromise();
  }
}
