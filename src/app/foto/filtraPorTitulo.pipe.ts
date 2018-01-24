import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filtraPorTitulo'
})
export class FiltraPorTituloPipe implements PipeTransform {
  transform(fotos, valorDigitado) {
    // Tenho uma lista
    // Tenho um valor pra comparar

    const listaAtualizada = fotos.filter(function(foto) { // Passa por todos os itens
      if(foto.titulo) {
        const tituloDaFoto = foto.titulo.toUpperCase()
        const valorDigitadoUppercase = valorDigitado.toUpperCase()

        return tituloDaFoto.includes(valorDigitadoUppercase) // true ou false
      } else {
        return false
      }
    })

    console.log(listaAtualizada)

    return listaAtualizada
  }
}
// Declara essa classe e exporta no foto.module.ts
