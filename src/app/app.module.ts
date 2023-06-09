import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './components/nav/nav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule} from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './service/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectosComponent,
    ExperienciaComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
