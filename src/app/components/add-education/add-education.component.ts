import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Education } from '../../Education'
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {
  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter();

  date: string = ""
  place: string = ""
  certification: string = ""
  description: string = ""
  showAddEducation: boolean = false
  subscription?: Subscription

  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                            .subscribe(value => this.showAddEducation = value)
   }

  onSubmit(){
    if(!this.date || !this.place || !this.certification || !this.description){
      alert("¡Por favor rellena todos los datos!")
      return
    }
    const{date, place, certification, description} = this
    const newEducation = {date, place, certification, description}

    this.onAddEducation.emit(newEducation);
  }
}
