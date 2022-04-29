import { HttpClient } from '@angular/common/http';
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

  listaDeProdutos:listaCardapio[] = [];
  listaComidas:listaComidas[] = [];
  listaBebidas:listaBebidas[] = [];  


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<listaCardapio[]>("http://localhost:3000/cardapio").subscribe((resultado)=>{
      this.listaDeProdutos = resultado
    })
    this.http.get<listaComidas[]>("http://localhost:3000/comidas").subscribe((resultado)=>{
      this.listaComidas = resultado
    })
    this.http.get<listaBebidas[]>("http://localhost:3000/bebidas").subscribe((resultado)=>{
      this.listaBebidas = resultado
    })
  }

  click(titulo:string){
    alert(titulo)
  }

}
