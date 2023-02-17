import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

// OnInit es el primer paso en el ciclo de vida de un componente
export class ListadoComponent{
  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeEliminado:string = '';

  borrarHeroe():void {
    this.heroeEliminado = this.heroes.shift() || '';
  }
}
