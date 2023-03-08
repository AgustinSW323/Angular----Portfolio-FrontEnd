import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from '../../Experience'
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {
  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter();

  date: string = ""
  company: string = ""
  position: string = ""
  description: string = ""
  showAddExperience: boolean = false
  subscription?: Subscription

  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                            .subscribe(value => this.showAddExperience = value)
   }

  onSubmit(){
    if(!this.date || !this.company || !this.position || !this.description){
      alert("¡Por favor rellena todos los datos!")
      return
    }
    const{date, company, position, description} = this
    const newExperience = {date, company, position, description}

    this.onAddExperience.emit(newExperience);
  }
}
