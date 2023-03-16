import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  // Aqui declaramos nuestros componentes
  declarations: [
    AppComponent,
  ],
  // Aqui colocamos otros modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  // Mas o menos como servicios a un modulo
  providers: [],
  // Este es un componente principal
  // Solo se usa una vez
  bootstrap: [AppComponent]
})
export class AppModule { }
