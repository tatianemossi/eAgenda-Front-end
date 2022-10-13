import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { CompromissoAppComponent } from './compromisso-app.component';
import { InserirCompromissoComponent } from './inserir/inserir-compromisso/inserir-compromisso.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso/listar-compromisso.component';

const routes: Routes = [
  {
    path: '', component: CompromissoAppComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: ListarCompromissoComponent },
      { path: 'inserir', component: InserirCompromissoComponent },
      // {
      //   path: 'editar/:id',
      //   component: EditarCompromissoComponent,
      //   resolve: { compromisso: FormsCompromissoResolver }
      // },
      // {
      //   path: 'excluir/:id',
      //   component: ExcluirCompromissoComponent,
      //   resolve: { compromisso: VisualizarCompromissoResolver }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompromissosRoutingModule { }
