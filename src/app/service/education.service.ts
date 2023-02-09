import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Education } from '../Education';
import { EDUCATIONS } from '../mock-educations';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = 'http://localhost:5000/educations'

  constructor(
    private http:HttpClient
  ) { }

  getEducations(): Observable<Education[]>{
    return this.http.get<Education[]>(this.apiUrl)
  }

  deleteEducation(education:Education): Observable<Education>{
    const url = `${this.apiUrl}/${education.id}`
    return this.http.delete<Education>(url)
  }

  addEducation(skill:Education): Observable<Education>{
    return this.http.post<Education>(this.apiUrl, skill, httpOptions);
  }
}
