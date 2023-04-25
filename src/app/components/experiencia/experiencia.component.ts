import { Component, OnInit } from '@angular/core';
import {faBuilding} from '@fortawesome/free-regular-svg-icons'
import {faGreaterThan} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia = [
    {puesto: "Desarrollador FullStack Jr", periodoDesde: "2021", periodoHasta: "Actualidad", descripcion: "Desarrollo proyectos para desarrollar mis habilidades"}
  ]
  faBuilding = faBuilding;
  faGreaterThan = faGreaterThan;
  constructor() { }

  ngOnInit(): void {
  }

}
