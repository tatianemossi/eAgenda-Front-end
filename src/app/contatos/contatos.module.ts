import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { InserirContatoComponent } from './inserir/inserir-contato.component';
import { ContatoAppComponent } from './contato-app.component';
import { ListarContatoComponent } from './listar/listar-contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContatoService } from './services/contato.service';
import { FormsContatoResolver } from './services/forms-contato.resolver';
import { VisualizarContatoResolver } from './services/visualizar-contato.resolver';


@NgModule({
  declarations: [
    InserirContatoComponent,
    ContatoAppComponent,
    ListarContatoComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [ContatoService, FormsContatoResolver, VisualizarContatoResolver]
})
export class ContatosModule { }
