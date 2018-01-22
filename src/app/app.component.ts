// HTML
// JavaScript
// Seletor (Nome da tag)
import { Component } from '@angular/core';

@Component({ // Annotation
  selector: 'app-root',
  // template: '<h1>Mario</h1>'
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Caelumpic';
  fotos = []

  constructor() {
    var pegaFotos = new XMLHttpRequest()
    pegaFotos.open('GET', 'http://localhost:3001/v1/fotos')
    pegaFotos.send()
    // Arrow Function Contexto Léxico (ou Leitura)
    pegaFotos.addEventListener('load', () => {
      console.log('A requisição chegou', this)
      this.fotos = JSON.parse(pegaFotos.response) // Objeto == JSON == Texto puro
    })
  }
}
