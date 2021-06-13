import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
 host:string='https://bookclubapi.azurewebsites.net/api/Book'

  //host:string='https://localhost:44309/api/Book';

  constructor(private http:HttpClient) { }

  getBooks(){

    return this.http.get(this.host);

  
  }

  /*getBooks():Promise<book[]>{
    return this.http.get<book[]>(this.host).toPromise();
  }
*/


}
