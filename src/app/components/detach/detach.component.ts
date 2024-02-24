import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import * as mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})
export class dataListProvider {

  // Metodo que devuelve una lista de lista de nombre aleatorios
  // @return { [] } lista de nombres aleatorias
  get data(){
    const randomName = mock.Random;
    return [
        randomName.first(),
        randomName.first(),
        randomName.first(),
        randomName.first()
      ]
    }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss']
})
export class DetachComponent implements OnInit{

  constructor( private _ref: ChangeDetectorRef, public dataListProvider: dataListProvider ){}

  ngOnInit(): void {
    // desacoplamos el componente del HTML con el metodo DETACH
    // this._ref.reattach();
    this._ref.detach();

    // cuando un componente esta desacoplado solo hay dos formas
    // de decirle que replique los cambios en el html
    // ? 1. detectChanges() --> detectar los cambios en ese momento y actualizar HTML
    // ? 2. reattach() --> (mostrado en el otro ejemplo) sirve para volver a acoplar el componente (ts y html)

    // cada 3 seg le decimos a angular que revise los nombres generados
    // es decir que detecte los cambios en el componente y los replique en el HTML
    setInterval(() => {
      // detectamos los cambios y reacoplamos puntualmente el componente
      this._ref.detectChanges();
    }, 2000)
  }

}
