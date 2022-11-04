import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PerguntaComponent} from "./pergunta/pergunta.component";
import {RespostaComponent} from "./resposta/resposta.component";
const routes: Routes=[
  {path:'pergunta', component:PerguntaComponent},
  {path:'resposta',component:RespostaComponent},
  ]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
