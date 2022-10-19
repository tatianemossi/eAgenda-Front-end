import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { DespesaAppComponent } from './despesa-app.component';
import { InserirDespesaComponent } from './inserir/inserir-despesa.component';
import { ListarDespesaComponent } from './listar/listar-despesa.component';
import { FormsDespesaResolver } from './services/forms-despesa.resolver';
import { VisualizarDespesaResolver } from './services/visualizar-despesa.resolver';

const routes: Routes = [
  {
    path: '', component: DespesaAppComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: ListarDespesaComponent },
      { path: 'inserir', component: InserirDespesaComponent },
      {
        path: 'editar/:id',
        //component: EditarDespesaComponent,
        resolve: { despesa: FormsDespesaResolver }
      },
      {
        path: 'excluir/:id',
        //component: ExcluirCompromissoComponent,
        resolve: { despesa: VisualizarDespesaResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
