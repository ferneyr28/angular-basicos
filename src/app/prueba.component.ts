import { Component } from '@angular/core';

@Component({
    selector: 'app-prueba',
    template: `
        <h1>Esto es una prueba</h1>
        <hr>
        <p>Desde componente Prueba mi nombre es {{nombre}}</p>
    `,
})

export class PruebaComponent {
    nombre: string = 'Ferney';
}