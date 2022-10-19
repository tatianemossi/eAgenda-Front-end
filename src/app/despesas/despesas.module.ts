import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesaAppComponent } from './despesa-app.component';
import { ListarDespesaComponent } from './listar/listar-despesa.component';
import { InserirDespesaComponent } from './inserir/inserir-despesa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DespesaService } from './services/despesa.service';
import { FormsDespesaResolver } from './services/forms-despesa.resolver';
import { VisualizarDespesaResolver } from './services/visualizar-despesa.resolver';
import { CategoriaService } from '../categorias/services/categoria.service';


@NgModule({
  declarations: [
    DespesaAppComponent,
    ListarDespesaComponent,
    InserirDespesaComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [DespesaService, FormsDespesaResolver, VisualizarDespesaResolver, CategoriaService]
})
export class DespesasModule { }
