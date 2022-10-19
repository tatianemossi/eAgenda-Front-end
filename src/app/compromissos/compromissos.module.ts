import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompromissosRoutingModule } from './compromissos-routing.module';
import { CompromissoService } from './services/compromisso.service';
import { CompromissoAppComponent } from './compromisso-app.component';
import { InserirCompromissoComponent } from './inserir/inserir-compromisso/inserir-compromisso.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso/listar-compromisso.component';
import { FormsCompromissoResolver } from './services/forms-compromisso.resolver';
import { VisualizarCompromissoResolver } from './services/visualizar-compromisso.resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContatoService } from '../contatos/services/contato.service';


@NgModule({
  declarations: [
    CompromissoAppComponent,
    ListarCompromissoComponent,
    InserirCompromissoComponent
  ],
  imports: [
    CommonModule,
    CompromissosRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [CompromissoService, FormsCompromissoResolver, VisualizarCompromissoResolver, ContatoService]
})
export class CompromissosModule { }
