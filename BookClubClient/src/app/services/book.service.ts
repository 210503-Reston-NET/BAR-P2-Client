import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http:HttpClient) { }

  getBooks(){

    return this.http.get(environment.HOSTAPI+"/Book");

  
  }

}
