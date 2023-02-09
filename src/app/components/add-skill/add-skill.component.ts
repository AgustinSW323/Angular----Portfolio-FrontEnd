import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from '../../Skill';
import { UiService } from 'src/app/service/ui.service';


@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {
  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter();
  
  name: string = ""
  showAddSkill: boolean = false
  subscription?: Subscription
  
  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                            .subscribe(value => this.showAddSkill = value)
   }

  onSubmit(){
    if(!this.name){
      alert("¡Por favor agrega una habilidad!")
      return
    }

    const{name} = this
    const newSkill = {name}

    this.onAddSkill.emit(newSkill);
  }
}
