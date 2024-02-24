import { Component, Injectable, ChangeDetectorRef, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrecioBitcoinProvider{
  precio: number = 100

  constructor(){
    // cada medio segundo se genera nuevo precio del bitcoin
    setInterval(() => {
      this.precio = Math.floor(Math.random() * 1000) + 100;
      // console.log(`Precio actual: ${this.precio}`);
    }, 500)
  }
}

@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrls: ['./reattach.component.scss'],
  inputs: ['enVivo']
})
export class ReattachComponent implements OnInit{

  mostrarEnVivo: boolean = true;

  constructor( private _ref: ChangeDetectorRef, public precioBitcoin: PrecioBitcoinProvider ){}

  set enVivo(valor: boolean){
    this.mostrarEnVivo = valor;

    if(valor){
      this._ref.reattach(); // reacoplamos para ver datos en vivo
    } else {
      this._ref.detach(); // desacoplamos el ts y html para no actualizar la vista
    }
  }

  ngOnInit(): void {

  }

}
