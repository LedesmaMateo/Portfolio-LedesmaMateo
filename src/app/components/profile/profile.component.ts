import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  datosPersonales = {
    nombre: "Ledesma Mateo",
    ocupacion: "Desarrollador Full Stack Jr",
    ocupacion2: "Redes y Telecomunicaciones",
    localidad: "Alta Gracia, Cordoba - Argentina",
    edad: "25 años"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
