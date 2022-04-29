import { Component, OnInit } from '@angular/core';
import { comidas } from 'src/app/constantes/comidas-mock';
import { listaComidas } from 'src/app/models/ngf-model';

@Component({
  selector: 'NGF-comidas-lista',
  templateUrl: "./comidas-lista.component.html",
  styles: [
  ]
})
export class ComidaListaComponent implements OnInit {
  listaComidas:listaComidas[] = comidas;  
  constructor() { }

  ngOnInit(): void {
  }
  click(titulo:string){alert(`Você pediu ${titulo}`)}
}
