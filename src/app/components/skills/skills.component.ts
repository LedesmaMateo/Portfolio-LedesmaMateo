import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  lenguajes = ["HTML", "CSS", "JS", "TS", "Angular", "SpringBoot", "MySQL"]
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
