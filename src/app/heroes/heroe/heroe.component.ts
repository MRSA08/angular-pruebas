import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'IronMan'
  edad: number = 43

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${ this.nombre} - ${ this.edad}`;
  }

  cambiaNombre(): void {
    this.nombre = 'Spider-man';
  }
  cambiaEdad(): void {
    this.edad = 45;
  }
}
