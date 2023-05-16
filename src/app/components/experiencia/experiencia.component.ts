import { Component, OnInit } from '@angular/core';
import {faBuilding} from '@fortawesome/free-regular-svg-icons'
import {faGreaterThan} from '@fortawesome/free-solid-svg-icons'
import { ApiService } from 'src/app/service/api.service';

interface experiencia{
    id:number,
    ano_fin: string,
    ano_inicio:number,
    descripcion: string,
    puesto: string
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: experiencia[] = [];
  faBuilding = faBuilding;
  faGreaterThan = faGreaterThan;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getExperiencia().subscribe((data) =>{
      this.experiencia = data;
      console.log(data)
    })
  }

}
