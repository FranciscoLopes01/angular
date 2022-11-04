import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PerguntaComponent } from './pergunta/pergunta.component';
import { ButtonComponent } from './componentes/button/button.component';
import { RespostaComponent } from './resposta/resposta.component';

@NgModule({
  declarations: [
    AppComponent,
    PerguntaComponent,
    ButtonComponent,
    RespostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
