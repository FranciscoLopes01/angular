import {Component, Input, OnInit} from '@angular/core';
import {pergunta} from "./pergunta";
import {LISTA_PERGUNTAS} from "./mock-perguntas";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {
  perguntas: pergunta[] = LISTA_PERGUNTAS;
  @Input() pergunta = " ";

  constructor(private _router: Router) { }

  onClick (){
    this._router.navigate(["/resposta"])

  }

  ngOnInit(): void {
  }

}
