import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  ApiKey = "AIzaSyBswlr6BfhTIcz_XDLKPpq7wRTykNcekZU";
  constructor(private http: HttpClient) { }

  SearchGoogleBooks(Search: string) {
    return this.http
      .get(`https://www.googleapis.com/books/v1/volumes?q=${Search}&maxResults=10&keyes&key=${this.ApiKey}`);
  }

  SearchGoogleBookByISBN(isbn: string) {
    return this.http.get(environment.GOOGLEAPI + "volumes?q=isbn:" + isbn);
    //return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:0735619670`);
  }
}
