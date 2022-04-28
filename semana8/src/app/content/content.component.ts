import { Component, OnInit } from '@angular/core';
import { ngf_mock } from '../constantes/ngf-mock';
import { lista } from '../models/ngf-model';

@Component({
  selector: 'NGF-content',
  templateUrl: `./content.component.html`,
  styles: [
  ]
})
export class ContentComponent implements OnInit {

  listaDeProdutos:lista[] = ngf_mock;

  constructor() { }

  ngOnInit(): void {
  }

  click(titulo:string){
    alert(titulo)
  }

}
