import { NgModule } from '@angular/core'
import { FotoComponent } from './foto.component'
import { FiltraPorTituloPipe } from './filtraPorTitulo.pipe'

@NgModule({
  declarations: [ FotoComponent, FiltraPorTituloPipe ],
  exports: [ FotoComponent, FiltraPorTituloPipe ]
})
export class FotoModule {}
