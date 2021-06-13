import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';

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

}
