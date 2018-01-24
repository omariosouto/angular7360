import { Component } from '@angular/core';
import { FotoComponent } from '../../foto/foto.component';
import { Http, Headers } from '@angular/http'
import { FotoService } from '../../services/foto.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  foto: FotoComponent
  formCadastro: FormGroup

  constructor(rota: ActivatedRoute,
              private fotoService: FotoService,
              private formBuilder: FormBuilder) {
    this.foto = new FotoComponent()

    this.formCadastro = this.formBuilder.group({
      titulo: ['', Validators.required],
      url: ['', Validators.pattern()],
      descricao: []
    })


    rota.params.subscribe((parametros) => {
      const idDoItem = parametros.id
      if(idDoItem) {
        this.fotoService.pegaUm(idDoItem)
                        .subscribe((foto) => {
                            // Misterios
                              this.foto = foto
                            })
      }
    })
  }

  salvar(event) {
    event.preventDefault()
    console.log('Essa é a foto:', this.foto)

    if(this.foto._id) {
      // atualizar
      this.fotoService.atualiza(this.foto)
                      .subscribe( () => {
                        console.log('Atualizado com sucessinhos!')
                      })
    } else {
      this.fotoService.cadastra(this.foto)
      .subscribe((pudimEBatataComBagulhos) => {
        console.log(pudimEBatataComBagulhos)
        this.foto = new FotoComponent()
      })
    }

    // Chamar o HTTP
    // E faz as paradinhas pra fazer o AJAX
  }
}
