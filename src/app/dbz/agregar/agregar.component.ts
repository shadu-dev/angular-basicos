import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {
 
  // Acepta un parametro del padre
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  constructor(private dbzService: DbzService){}

  // Se tiene que especificar el tipo de datos en el operador diamante en este caso una interfaz
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); Cuando queremos emitir informacion al padre

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) { return; }

    // this.onNuevoPersonaje.emit( this.nuevo )
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
