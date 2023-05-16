import { Component, OnInit } from '@angular/core';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  faProject = faDiagramProject;
  constructor() { }

  ngOnInit(): void {
    
  }

}
