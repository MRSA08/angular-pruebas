import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Heroe1', 'Heroe2', 'Heroe3', 'Heroe4'];
  borrado: string = '';
  borrados: string[] = [];
  borrarHeroe(): void {
    console.log('borrando...')

    const heroeBorrado = this.heroes.pop() || '';
    console.log('Heroe borrado ', heroeBorrado);
    this.borrado=heroeBorrado;
    this.borrados.push(heroeBorrado)
  }
}

