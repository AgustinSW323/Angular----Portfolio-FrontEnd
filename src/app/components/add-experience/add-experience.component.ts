import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from '../../Experience'
import { UiService } from 'src/app/service/ui.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {
  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter();

  dateIni: string = ""
  dateFin: string = ""
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
    if(!this.dateIni || !this.company || !this.position || !this.description){
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacios',
        text: '¡Por favor rellena todos los datos!',
        confirmButtonColor: 'var(--primary-color)',
        iconColor: 'var(--secondary-color)'
      })
      return
    }
    const{dateIni, dateFin, company, position, description} = this
    const newExperience = {dateIni, dateFin, company, position, description}

    this.onAddExperience.emit(newExperience);
  }
}
