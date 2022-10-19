import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaAppComponent } from './categoria-app.component';
import { ListarCategoriaComponent } from './listar/listar-categoria.component';
import { InserirCategoriaComponent } from './inserir/inserir-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategoriaService } from './services/categoria.service';
import { FormsCategoriaResolver } from './services/forms-categoria.resolver';
import { VisualizarCategoriaResolver } from './services/visualizar-categoria.resolver';
import { EditarCategoriaComponent } from './editar/editar-categoria.component';
import { ExcluirCategoriaComponent } from './excluir/excluir-categoria.component';


@NgModule({
  declarations: [
    CategoriaAppComponent,
    ListarCategoriaComponent,
    InserirCategoriaComponent,
    EditarCategoriaComponent,
    ExcluirCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [CategoriaService, FormsCategoriaResolver, VisualizarCategoriaResolver]
})
export class CategoriasModule { }
