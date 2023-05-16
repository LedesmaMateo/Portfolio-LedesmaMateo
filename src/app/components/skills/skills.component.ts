import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { ApiService } from 'src/app/service/api.service';

interface Skill{
    id:number,
    lenguaje: string,
    nivel: string
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
  faStar = faStar;
  faGear = faGear;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSkill().subscribe((data) =>{
      this.skill = data;
      console.log();
      
    })
  }

}
