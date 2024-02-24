import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss']
})
export class NgZoneComponent {

  progreso: number = 0; // valor que va a ir de 0 al 100%
  texto: string = ''; // dentro / fuera de Angular Zone

  constructor( private _ngZone: NgZone ){}

  // metodo para incrementar de 0 a 100 el progreso
  // terminar Callback que se ejecuta al terminar el incremento
  incrementarProgreso(terminar: ()=> void){
    if(this.progreso < 100){
      this.progreso += 1; // incrementamos en 1
        console.log(`Progreso actual: ${this.progreso}`)
      window.setTimeout(()=> {
        this.incrementarProgreso(terminar) // recursividad para seguir incrementando
      }, 10)
    } else {
      // ya habria terminado de incrementar, ejecutamos el callback
      terminar();
    }
  }

  // metodo aumenta el progreso DENTRO de ngZone, implica que los cambios se vean en el HTML
  aumentarDentroNgZone(){
    this.texto = 'Dentro';
    this.progreso = 0; // lo reseteamos para la ejecucion desde 0%
    this.incrementarProgreso(
      ()=> console.log(`${this.texto}: de Angular Zone: Incremento terminado`)
  )}

  // metodo aumenta el progreso FUERA de ngZone, implica que los cambios se no se van a ver en el HTML
  // hasta que volvamos a meter el componente en el angular zone
  aumentarFueraNgZone(){
    this.texto = 'Fuera';
    this.progreso = 0; // lo reseteamos para la ejecucion desde 0%
    // ejecutamos FUERA de angular zone
    this._ngZone.runOutsideAngular(()=> {
      this.incrementarProgreso(
      ()=>
      // CUANDO TERMINE DE INCREMENTAR
      // es cuando pasamos a ejecutar en angular zone de nuevo
      // volvemos a reacoplar el componente TS y html
        this._ngZone.run(()=>{
          console.log(`${this.texto}: de Angular Zone: Incremento terminado`)
        })
      )})
    }
}
