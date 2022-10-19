import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from 'src/app/contatos/services/contato.service';
import { ListarContatoViewModel } from 'src/app/contatos/view-models/listar-contato.view-model';
import { CompromissoService } from '../../services/compromisso.service';
import { FormsCompromissoViewModel } from '../../view-models/forms-compromisso-view-model';
import { TipoLocalCompromissoEnum } from '../../view-models/tipoLocalCompromissoEnum';

@Component({
  selector: 'app-inserir-compromisso',
  templateUrl: './inserir-compromisso.component.html',
  styles: [
  ]
})
export class InserirCompromissoComponent implements OnInit {
  public formCompromisso: FormGroup;
  public tiposLocal = Object.values(TipoLocalCompromissoEnum)
    .filter(v => !Number.isFinite(v));

  public contatos$: Observable<ListarContatoViewModel[]>;

  public compromissoFormVM: FormsCompromissoViewModel = new FormsCompromissoViewModel();

  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private compromissoService: CompromissoService,
    private contatoService: ContatoService,
    private router: Router) {

    titulo.setTitle('Cadastrar Compromisso - eAgenda');
  }

  ngOnInit(): void {
    this.formCompromisso = this.formBuilder.group({
      assunto: ['', [Validators.required, Validators.minLength(3)]],
      tipoLocal: ['', [Validators.required]],
      link: ['', Validators.minLength(3)],
      local: ['', Validators.minLength(3)],
      data: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaTermino: ['', Validators.required],
      contato: [''],
      contatoId: ['', Validators.required]
    });

    this.contatos$ = this.contatoService.selecionarTodos();
  }

  get assunto() {
    return this.formCompromisso.get('assunto');
  }

  get tipoLocal() {
    return this.formCompromisso.get('tipoLocal');
  }

  get link() {
    return this.formCompromisso.get('link');
  }

  get local() {
    return this.formCompromisso.get('local');
  }

  get data() {
    return this.formCompromisso.get('data');
  }

  get horaInicio() {
    return this.formCompromisso.get('horaInicio');
  }

  get horaTermino() {
    return this.formCompromisso.get('horaTermino');
  }

  get contatoId() {
    return this.formCompromisso.get('contato');
  }

  public gravar() {
    if (this.formCompromisso.invalid) return;

    this.compromissoFormVM = Object.assign({}, this.compromissoFormVM, this.formCompromisso.value);

    this.compromissoService.inserir(this.compromissoFormVM)
      .subscribe({
        next: (compromissoInserido) => this.processarSucesso(compromissoInserido),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(compromisso: FormsCompromissoViewModel): void {
    this.router.navigate(['/compromissos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.error(erro);
    }
  }

  public limparCamposLinkELocal(): void {
    this.formCompromisso.controls['link'].reset();
    this.formCompromisso.controls['local'].reset();
  }
}
