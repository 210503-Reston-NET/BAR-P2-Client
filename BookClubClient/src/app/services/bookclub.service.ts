import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookclubService {

  
  host:string='https://bookclubapi.azurewebsites.net/api/BookClub'

  //host:string='https://localhost:44309/api/Book';

  constructor(private http:HttpClient) { }

  getBookclubs(){

    return this.http.get(this.host);

  
  }

 
}
