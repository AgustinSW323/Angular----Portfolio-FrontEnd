import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from '../../Education';
import { EDUCATIONS } from '../../mock-educations'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {
  @Input() education: Education = EDUCATIONS[0]
  @Output() onDeleteEducation: EventEmitter<Education> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Education> = new EventEmitter()
  @Input() visibleIcon: boolean = false
  faTimes = faTimes
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(education: Education){
    this.onDeleteEducation.emit(education);
  }

  onToggle(education:Education){
    this.onToggleReminder.emit(education);
  }

}
