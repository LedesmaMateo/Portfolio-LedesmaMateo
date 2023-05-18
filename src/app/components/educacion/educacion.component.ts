import { Component, OnInit } from '@angular/core';
import {faBook, faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/service/api.service';
import { SpinnerService } from 'src/app/service/spinner.service';

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
  constructor(private apiService: ApiService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.llamarSpinner();
    this.apiService.getEducacion().subscribe((data) =>{
      this.educacion = data;
      console.log(this.educacion)
    })
  }

}
