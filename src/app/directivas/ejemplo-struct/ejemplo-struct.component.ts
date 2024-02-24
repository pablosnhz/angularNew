import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-struct',
  templateUrl: './ejemplo-struct.component.html',
  styleUrls: ['./ejemplo-struct.component.scss']
})
export class EjemploStructComponent {

  rol: boolean = false;

  cambiarRol(){
    this.rol = !this.rol; // de true a false
  }
}
