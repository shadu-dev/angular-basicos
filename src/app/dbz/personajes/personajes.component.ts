import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input() personajes:Personaje[] = []; -cuando la propiedad vendra del padre como parametro
  get personajes(){
    return this.dbzService.personajes;
  }
  constructor( private dbzService: DbzService){

  }  
}
