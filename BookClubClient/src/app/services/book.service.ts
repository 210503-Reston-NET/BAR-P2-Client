import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book, FavoriteBook, BookToRead, BooksRead } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
 host:string='https://bookclubapi.azurewebsites.net/api/Book';

  //host:string='https://localhost:44309/api/Book';

  constructor(private http:HttpClient) { }

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

  AddBooKToRead(bookToRead:BookToRead) : Promise<BookToRead>{
    console.log("in services")
    console.log(bookToRead);
    return this.http.post<BookToRead>("https://bookclubapi.azurewebsites.net/api/BookToRead", bookToRead).toPromise().then(bk=> bk);
  }

  AddBooksRead(booksRead:BooksRead) : Promise<BooksRead>{
    console.log("in book service");
    console.log(booksRead);
    return this.http.post<BooksRead>("https://bookclubapi.azurewebsites.net/api/BooksRead", booksRead).toPromise().then(bk=> bk);
  }

  GetBooksToRead(email:string): Promise<book[]>{
    return this.http.get<book[]>('https://bookclubapi.azurewebsites.net/api/BookToRead/'+ email).toPromise();
  }

  GetBooksRead(email:string): Promise<book[]>{
    return this.http.get<book[]>('https://bookclubapi.azurewebsites.net/api/BooksRead/'+ email).toPromise();
  }

  GetFavoriteBooks(email:string): Promise<book[]>{
    return this.http.get<book[]>('https://bookclubapi.azurewebsites.net/api/FavoriteBook/'+ email).toPromise();
  }
  /*getBooks():Promise<book[]>{
    return this.http.get<book[]>(this.host).toPromise();
  }
*/


}
