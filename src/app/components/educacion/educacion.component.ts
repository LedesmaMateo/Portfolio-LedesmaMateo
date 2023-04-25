import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion = [
    {entidad: "IPEM 97", tipo: "Secundatio", titulo: "Bachiller en Comunicacion", periodo: "2010-2016"},
    {entidad: "Argentina Programa", tipo: "Curso", titulo: "Desarrollador Full Stack Jr", periodo:"2021-2022"},
    {entidad: "Universidad Siglo XXI", tipo: "Tecnicatura", titulo: "Tecnicatura en Redes y Telecomunicaciones", periodo: "En curso"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
