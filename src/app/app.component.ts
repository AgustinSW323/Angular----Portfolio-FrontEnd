import { Component, Input} from '@angular/core';
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

  getValue(val:string, val2:string){
    if(val == this.userData.email && val2 == this.userData.password){
      this.email = val;
      this.login = true;
    } 

    else {
      this.email = "invalid";
      this.login = false;
      return alert("Combinación no válida de correo electrónico y contraseña")
    }
  }

  constructor() {  }

  ngOnInit(): void {  }
}