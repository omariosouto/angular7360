import { Component, OnInit } from '@angular/core';
import { FotoService } from '../../services/foto.service'
import { FotoComponent } from '../../foto/foto.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  title: string = 'Caelumpic';
  fotos: Array<FotoComponent> = []
  fotoService: FotoService

  constructor(fotoService: FotoService) { // Injeção de dependencia
    this.fotoService = fotoService
    fotoService
        .listar()
        .subscribe((objetoDasFotos) => {
            this.fotos = objetoDasFotos
        })
  }
  removeFoto(fotoQueVaiSumir: FotoComponent) {
    // Ler o ID da Foto
    console.log('Ta funfano?', fotoQueVaiSumir)

    this.fotoService
      .deleta(fotoQueVaiSumir)
      .subscribe(() => {
        // Ir na lista e tirar o item da lista com o ID
        const fotosAtualizadas = this.fotos.filter(function(fotoAtual) {
          return fotoAtual._id != fotoQueVaiSumir._id
        })
        this.fotos = fotosAtualizadas
      })

  }
}
