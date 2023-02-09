import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Skill } from '../Skill';
import { SKILLS } from '../mock-skills';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = 'http://localhost:5000/skills'

  constructor(
    private http:HttpClient
  ) { }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiUrl)
  }

  deleteSkill(skill:Skill): Observable<Skill>{
    const url = `${this.apiUrl}/${skill.id}`
    return this.http.delete<Skill>(url)
  }

  addSkill(skill:Skill): Observable<Skill>{
    return this.http.post<Skill>(this.apiUrl, skill, httpOptions);
  }
}
