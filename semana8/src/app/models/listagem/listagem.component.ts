import { Component, Input, OnInit } from '@angular/core';
import { listaBebidas, listaComidas } from '../ngf-model';

@Component({
  selector: 'NGF-listagem',
  templateUrl: "listagem.component.html",
  styles: [
  ]
})
export class ListagemComponent implements OnInit {

  @Input() item?:listaComidas | listaBebidas

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  click(titulo:string|undefined){alert(`Você pediu ${titulo}`)}
}
