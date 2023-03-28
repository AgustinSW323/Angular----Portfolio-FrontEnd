import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from "../../Skill";
import { SKILLS } from "../../mock-skills"
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  @Input() skill: Skill = SKILLS[0]
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Skill> = new EventEmitter()

  @Input() visibleIcon: boolean = false;

  faTimes = faTimes
  faPencil = faPencil

  edit: boolean = false;

  changeSkill(val:string){
    this.skill.name = val
    console.log(val);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(skill: Skill){
    this.onDeleteSkill.emit(skill);
  }

  onToggle(skill:Skill){
    this.onToggleReminder.emit(skill);
  }

  onEdit(){
    this.edit = !this.edit
  }
  
}
