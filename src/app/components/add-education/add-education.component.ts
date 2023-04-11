import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Education } from '../../Education'
import { UiService } from 'src/app/service/ui.service';
import Swal from 'sweetalert2';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {
  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter();

  dateIni: string = ""
  dateFin: string = ""
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
    if(!this.dateIni || !this.place || !this.certification || !this.description){
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacios',
        text: '¡Por favor rellena todos los datos!',
        confirmButtonColor: 'var(--primary-color)',
        iconColor: 'var(--secondary-color)'
      })
      return
    }
    const{dateIni, dateFin, place, certification, description} = this
    const newEducation = {dateIni, dateFin, place, certification, description}

    this.onAddEducation.emit(newEducation);
  }
}
