import { Component, OnInit } from '@angular/core';
import { bebidas } from 'src/app/constantes/bebidas-mock';
import { listaBebidas } from 'src/app/models/ngf-model';

@Component({
  selector: 'NGF-bebidas-lista',
  templateUrl: "./bebidas-lista.component.html",
  styles: [
  ]
})
export class BebidasListaComponent implements OnInit {
  listaBebidas:listaBebidas[] = bebidas;  
  constructor() { }

  ngOnInit(): void {
  }

  click(titulo:string){alert(`Você pediu ${titulo}`)}
}
