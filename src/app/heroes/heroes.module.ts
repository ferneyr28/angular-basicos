import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';


import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        //solo van modulos
        //common module nos importa ngif etc
        //commomModule mopudlo- importar directiva ng-for etc
        CommonModule
    ]
})

export class HeroesModule {

}