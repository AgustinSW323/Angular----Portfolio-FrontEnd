import { Component, Input } from '@angular/core';
import { EducationService } from '../../service/education.service';
import { Education } from "../../Education";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EDUCATIONS } from '../../mock-educations';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educations: Education[] = EDUCATIONS;
  showAddEducation: boolean = false;
  subscription?: Subscription;

  @Input() visible: boolean = false;

  faTimes = faTimes

  constructor(
    private educationService: EducationService,
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                            .subscribe(value => this.showAddEducation = value)
   }

  toggleAddEducation(){
    this.uiService.toggleAdd();
  }

  ngOnInit(): void {
    this.educationService.getEducations().subscribe((educations)=>(
      this.educations = educations
     ));
  }

  deleteEducation(education:Education){
    this.educationService.deleteEducation(education)
      .subscribe(
        () => (
        this.educations = this.educations.filter( (e) =>{
          return e.id !== education.id
        })
      ))
  }
  addEducation(education:Education){
    this.educationService.addEducation(education).subscribe((education)=>(
      this.educations.push(education)
    ))
  }
}
