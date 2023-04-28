import { Component, OnInit } from '@angular/core';
import {faBook, faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/service/api.service';

interface Educacion{
  entidad: string;
  titulo: string;
  tipo: string;
  ano_comienzo: number;
  ano_fin: string; 
}

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educacion: Educacion[] = [];

  faBook = faBook;
  faGreatherThan = faGreaterThan;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEducacion().subscribe((data) =>{
      this.educacion = data;
      console.log(this.educacion)
    })
  }

}
