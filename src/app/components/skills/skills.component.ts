import { Component, OnInit, Input } from '@angular/core';
import { SkillService } from '../../service/skill.service';
import { Skill } from "../../Skill";
import { SKILLS } from '../../mock-skills';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {
  
  skills: Skill[] = [] = SKILLS;
  showAddSkill :boolean = false;
  subscription?: Subscription;
  
  @Input() visible: boolean = false;

  constructor(
    private skillService: SkillService,
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                                      .subscribe(value => this.showAddSkill = value)
  }

  toggleAddSkill(){
    this.uiService.toggleAdd()
  }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((skills)=>(
      this.skills = skills
     ));
  }

  deleteSkill(skill:Skill){
    this.skillService.deleteSkill(skill)
      .subscribe(
        () => (
        this.skills = this.skills.filter( (s) =>{
          return s.id !== skill.id
        })
      ))
  }

  addSkill(skill:Skill){
    this.skillService.addSkill(skill).subscribe((skill)=>(
      this.skills.push(skill)
    ))
  }

}
