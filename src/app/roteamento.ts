import { Routes, RouterModule } from '@angular/router'
import { CadastroComponent } from './pages/cadastro/cadastro.component'
import { ListagemComponent } from './pages/listagem/listagem.component'


const rotasDaApp: Routes = [
  {path: '', component: ListagemComponent },
  {path: 'cadastro', component: CadastroComponent },
  {path: 'cadastro/:id', component: CadastroComponent },
  {path: '**', redirectTo: '' }
]

export const roteamento = RouterModule.forRoot(rotasDaApp)
// <router-outlet></router-outlet>
