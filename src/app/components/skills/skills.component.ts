import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  lenguajes = ["HTML", "CSS", "JS", "TS", "Angular", "SpringBoot", "MySQL"]
  constructor() { }

  ngOnInit(): void {
  }

}
