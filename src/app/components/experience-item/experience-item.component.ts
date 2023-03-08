import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experience } from '../../Experience';
import { EXPERIENCES } from '../../mock-experiences'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {
  @Input() experience: Experience = EXPERIENCES[0]
  @Output() onDeleteExperience: EventEmitter<Experience> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Experience> = new EventEmitter()
  @Input() visibleIcon: boolean = false
  faTimes = faTimes
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(experience: Experience){
    this.onDeleteExperience.emit(experience);
  }

  onToggle(experience:Experience){
    this.onToggleReminder.emit(experience);
  }


}
