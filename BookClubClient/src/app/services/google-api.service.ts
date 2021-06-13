import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  ApiKey = "AIzaSyBswlr6BfhTIcz_XDLKPpq7wRTykNcekZU";
  constructor(private http:HttpClient) { }

  SearchGoogleBooks(Search: string){
    return this.http
    .get(`https://www.googleapis.com/books/v1/volumes?q=${Search}&maxResults=10&keyes&key=${this.ApiKey}`);
  }
}
