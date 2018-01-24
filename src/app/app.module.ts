import 'rxjs/add/operator/map'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module'
import { CardModule } from './card/card.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { roteamento } from './roteamento'
import { FormsModule } from '@angular/forms'
import { FotoService } from './services/foto.service'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CardModule,
    BrowserModule,
    FotoModule,
    HttpModule,
    roteamento,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ FotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
