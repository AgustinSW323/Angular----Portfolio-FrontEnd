import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience } from '../Experience';
import { EXPERIENCES } from '../mock-experiences';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'http://localhost:5000/experiences'

  constructor(
    private http:HttpClient
  ) { }

  getExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.apiUrl)
  }

  deleteExperience(experience:Experience): Observable<Experience>{
    const url = `${this.apiUrl}/${experience.id}`
    return this.http.delete<Experience>(url)
  }

  addExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl, experience, httpOptions);
  }
}
