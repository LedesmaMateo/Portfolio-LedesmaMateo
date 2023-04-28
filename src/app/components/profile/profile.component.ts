import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { ApiService } from 'src/app/service/api.service';

interface datosPersonales{
  id:number;
  nombre:string;
  apellido:string;
  fecha_nacimiento:Date;
  ocupacion:string;
  ocupacion2:string;
  localidad:string;
  breve_descripcion:string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  datosPersonales: datosPersonales[] = [];

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.apiService.getPerfil().subscribe((data) =>{
        this.datosPersonales = data;
        console.log(this.datosPersonales)
      })
  }

}
