import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class AttrDirective {

  @Input() defaultColor = '';
  @Input('appHighLight') hightLightColor = '';

  constructor( private _elementRef: ElementRef) { }

  // comportamiento para MOUSE ENTER en el componente
  @HostListener('mouseenter') onMouseEnter(){
    this._cambiarColor(this.hightLightColor || this.defaultColor || 'tomato');
  }
  // comportamiento para MOUSE LEAVE en el componente
  @HostListener('mouseleave') onMouseLeave(){
    this._cambiarColor(null); //sacamos el color de fondo
  }

  // metodo encargado de cambiar color para el fondo del componente
  // color para el fondo del componente
  private _cambiarColor(color: string | null){
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
