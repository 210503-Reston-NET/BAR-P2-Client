import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { book, FavoriteBook, BookToRead, BooksRead } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
 host:string='https://bookclubapi.azurewebsites.net/api/Book';

  //host:string='https://localhost:44309/api/Book';

  constructor(private http:HttpClient) { }

  getBooks(){

    return this.http.get(environment.HOSTAPI+"Book");

  
  }


  AddBook(newBook:book) : Promise<book>{
    console.log("in service");
    console.log(newBook);
    return this.http.post<book>(environment.HOSTAPI +'Book', newBook).toPromise().then(bk => bk);
  }

  AddFavoriteBooK(favBook:FavoriteBook) : Promise<FavoriteBook>{
    return this.http.post<FavoriteBook>(environment.HOSTAPI+"FavoriteBook", favBook).toPromise().then(bk=> bk);
  }

  AddBooKToRead(bookToRead:BookToRead) : Promise<BookToRead>{
    console.log("in services")
    console.log(bookToRead);
    return this.http.post<BookToRead>(environment.HOSTAPI+"BookToRead", bookToRead).toPromise().then(bk=> bk);
  }

  AddBooksRead(booksRead:BooksRead) : Promise<BooksRead>{
    console.log("in book service");
    console.log(booksRead);
    return this.http.post<BooksRead>(environment.HOSTAPI+"BooksRead", booksRead).toPromise().then(bk=> bk);
  }

  GetBooksToRead(email:string): Promise<book[]>{
    return this.http.get<book[]>(environment.HOSTAPI+'BookToRead/'+ email).toPromise();
  }

  GetBooksRead(email:string): Promise<book[]>{
    return this.http.get<book[]>(environment.HOSTAPI+'BooksRead/'+ email).toPromise();
  }

  GetFavoriteBooks(email:string): Promise<book[]>{
    return this.http.get<book[]>(environment.HOSTAPI+'FavoriteBook/'+ email).toPromise();
  }

  GetBookByISBN(isbn: string): Promise<book>{
    return this.http.get<book>(environment.HOSTAPI + 'Book/' + isbn).toPromise();
  }
  /*getBooks():Promise<book[]>{
    return this.http.get<book[]>(this.host).toPromise();
  }
*/


}
