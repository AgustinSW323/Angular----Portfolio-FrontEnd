import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAdd: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAdd():void{
    this.showAdd = !this.showAdd;
    this.subject.next(this.showAdd);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

}
