import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './componentes/header-nav/header-nav.component';
import { AsideBanerComponent } from './componentes/aside-baner/aside-baner.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { SkillsetComponent } from './componentes/skillset/skillset.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    AsideBanerComponent,
    FormacionComponent,
    ProyectosComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    SkillsetComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
