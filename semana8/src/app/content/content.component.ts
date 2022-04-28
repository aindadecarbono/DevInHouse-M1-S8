import { Component, OnInit } from '@angular/core';
import { bebidas } from '../constantes/bebidas-mock';
import { ngf_mock } from '../constantes/cardapio-mock';
import { comidas } from '../constantes/comidas-mock';
import { listaBebidas, listaCardapio, listaComidas } from '../models/ngf-model';

@Component({
  selector: 'NGF-content',
  templateUrl: `./content.component.html`,
  styles: [
  ]
})
export class ContentComponent implements OnInit {

  listaDeProdutos:listaCardapio[] = ngf_mock;
  listaComidas:listaComidas[] = comidas;
  listaBebidas:listaBebidas[] = bebidas;  


  constructor() { }

  ngOnInit(): void {
  }

  click(titulo:string){
    alert(titulo)
  }

}
