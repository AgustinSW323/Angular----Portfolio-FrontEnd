import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserData } from '../UserData';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'http://localhost:5000/userData'

  constructor(
    private http:HttpClient
  ) { }

  getUserData(): Observable<UserData[]>{
    return this.http.get<UserData[]>(this.apiUrl)
  }
}
