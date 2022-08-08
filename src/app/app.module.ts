import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './componentes/header-nav/header-nav.component';
import { AsideBanerComponent } from './componentes/aside-baner/aside-baner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    AsideBanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
