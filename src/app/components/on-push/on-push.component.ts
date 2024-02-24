import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit{

  // valor que se va a incrementar cada segundo en el archivo ts
  // dependiendo de la estrategia changeDetection sus cambios se van a ver en el html
  segundos: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.segundos ++;
      console.log(`segundos transcurridos: ${this.segundos}`)
    }, 1000)
  }
}
