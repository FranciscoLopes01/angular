import {Component, Input, OnInit} from '@angular/core';
import {LISTA_PERGUNTAS} from "../pergunta/mock-perguntas";
import {pergunta} from "../pergunta/pergunta";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {
  perguntas: pergunta[] = LISTA_PERGUNTAS;
  @Input() pergunta = " ";
  @Input() color = " green ";

  constructor(private _router: ActivatedRoute) { }

  onClick () {
  }
  ngOnInit(): void {
  }

}
