import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public active : boolean = false;

  setOpened() : void {
    this.active = true;
  }
  setClosed() : void {
    this.active = false;
  }


}
