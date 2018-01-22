// Exercicio 2.1 e 2.2
import { Component, Input } from '@angular/core'

// Component === Angular / @ Anotation =
@Component({
  selector: 'foto',
  templateUrl: './foto.component.html'
})
export class FotoComponent {
  @Input() titulo;
  @Input() url;
}

