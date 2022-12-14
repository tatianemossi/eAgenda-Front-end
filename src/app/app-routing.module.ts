import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AuthGuard } from './auth/services/auth.guard';
import { LoginGuard } from './auth/services/login.guard';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: '', redirectTo: 'conta/autenticar', pathMatch: 'full' },
  { path: 'conta/autenticar', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'conta/registrar', component: RegistroComponent, canActivate: [LoginGuard] },
  {
    path: 'dashboard',
    loadChildren: () => import ('./dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./tarefas/tarefa.module')
      .then(m => m.TarefaModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./contatos/contatos.module')
      .then(m => m.ContatosModule)
  },
  {
    path: 'compromissos',
    loadChildren: () => import('./compromissos/compromissos.module')
      .then(m => m.CompromissosModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module')
      .then(m => m.CategoriasModule)
  },
  {
    path: 'despesas',
    loadChildren: () => import('./despesas/despesas.module')
      .then(m => m.DespesasModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
