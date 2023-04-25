import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  lenguajesFront = ["HTML", "CSS", "JS", "Bootstrap", "TS", "Angular"]
  lenguajesBack = ["Java", "SpringBoot", "MySQL"]
  faStar = faStar;
  faGear = faGear;
  constructor() { }

  ngOnInit(): void {
  }

}
