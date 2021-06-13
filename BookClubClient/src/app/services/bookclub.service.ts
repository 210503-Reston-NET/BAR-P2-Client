import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book, FavoriteBook } from '../models/book';

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

  getBooks(){
    return this.http.get(this.host);
  }

  AddBook(newBook:book) : Promise<book>{
    console.log(newBook);
    return this.http.post<book>(this.host, newBook).toPromise().then(bk => bk);
  }

  AddFavoriteBooK(favBook:FavoriteBook) : Promise<FavoriteBook>{
    return this.http.post<FavoriteBook>("https://bookclubapi.azurewebsites.net/api/FavoriteBook", favBook).toPromise().then(bk=> bk);
  }
}
