import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserData } from './UserData';
import { USERData } from './mock-userData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-FrontEnd';

  @Input() userData: UserData = USERData[0]

  login: boolean = false;
  loginBTN: boolean = false;

  email: string = '';
  password: string = '';

  getValue(val:string, val2:string){
    console.log(val)
    if(val == this.userData.email && val2 == this.userData.password){
      this.email = val;
      this.password = val2;
    } 

    if(val !== this.userData.email){
      this.email = "invalid";
      this.password = "invalid";
    }
    
    if(this.email == this.userData.email && this.password == this.userData.password){
      this.login = true;
    }

    if(this.email !== this.userData.email || this.password !== this.userData.password){
      this.login = false;
    }
  }

  constructor() {  }

  ngOnInit(): void {  }
}