import { Component, Input } from '@angular/core';
import { ExperienceService } from '../../service/experience.service';
import { Experience } from "../../Experience";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EXPERIENCES } from '../../mock-experiences';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences: Experience[] = EXPERIENCES;
  showAddExperience: boolean = false;
  subscription?: Subscription;

  @Input() visible: boolean = false;

  faTimes = faTimes

  constructor(
    private experienceService: ExperienceService,
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                            .subscribe(value => this.showAddExperience = value)
   }

  toggleAddExperience(){
    this.uiService.toggleAdd();
  }

  ngOnInit(): void {
    this.experienceService.getExperiences().subscribe((experiences)=>(
      this.experiences = experiences
     ));
  }

  deleteExperience(experience:Experience){
    this.experienceService.deleteExperience(experience)
      .subscribe(
        () => (
        this.experiences = this.experiences.filter( (x) =>{
          return x.id !== experience.id
        })
      ))
  }
  addExperience(experience:Experience){
    this.experienceService.addExperience(experience).subscribe((experience)=>(
      this.experiences.push(experience)
    ))
  }
}
