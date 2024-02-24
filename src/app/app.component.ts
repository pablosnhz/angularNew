import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angularChangeDetection';

  // variable para ejemplo de REATTACH
  live: boolean = true;




  // valores para el ejemplo de Async Pipe
  // items = [{}];
  items = [{
    numero: 0 // para inicializarlo con un valor cualquiera.
  }]
  items$ = new BehaviorSubject(this.items); // le pasamos un valor por defecto

  addItem(){
    const nuevoItem = Math.floor(Math.random() *100 ) + 1;
    this.items.push({
      numero: nuevoItem
    })
    // emitimos un nuevo valor de la lista al componente suscrito
    this.items$.next(this.items)
  }

}
