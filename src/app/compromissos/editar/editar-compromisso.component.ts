import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from 'src/app/contatos/services/contato.service';
import { ListarContatoViewModel } from 'src/app/contatos/view-models/listar-contato.view-model';
import { CompromissoService } from '../services/compromisso.service';
import { FormsCompromissoViewModel } from '../view-models/forms-compromisso-view-model';
import { TipoLocalCompromissoEnum } from '../view-models/tipoLocalCompromissoEnum';

@Component({
  selector: 'app-editar-compromisso',
  templateUrl: './editar-compromisso.component.html',
  styles: [
  ]
})
export class EditarCompromissoComponent implements OnInit {
  public formCompromisso: FormGroup;

  public tiposLocal = Object.values(TipoLocalCompromissoEnum)
    .filter(v => !Number.isFinite(v));

  public contatos$: Observable<ListarContatoViewModel[]>;

  public compromissoFormVM: FormsCompromissoViewModel = new FormsCompromissoViewModel();

  constructor(
    titulo: Title,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private compromissoService: CompromissoService,
    private contatoService: ContatoService
  ) {
    titulo.setTitle('Editar Compromisso - eAgenda');
  }

  ngOnInit(): void {
    this.compromissoFormVM = this.route.snapshot.data['compromisso'];

    this.formCompromisso = this.fb.group({
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

    this.formCompromisso.patchValue({
      id: this.compromissoFormVM.id,
      assunto: this.compromissoFormVM.assunto,
      tipoLocal: this.compromissoFormVM.tipoLocal,
      link: this.compromissoFormVM.link,
      local: this.compromissoFormVM.local,
      data: this.compromissoFormVM.data,
      horaInicio: this.compromissoFormVM.horaInicio,
      horaTermino: this.compromissoFormVM.horaTermino,
      contato: this.compromissoFormVM.contato,
      contatoId: this.compromissoFormVM.contatoId
    });
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
    return this.formCompromisso.get('contatoId');
  }

  public gravar() {
    if (this.formCompromisso.invalid) return;

    this.compromissoFormVM = Object.assign({}, this.compromissoFormVM, this.formCompromisso.value);

    this.compromissoService.editar(this.compromissoFormVM)
      .subscribe({
        next: (compromissoEditado) => this.processarSucesso(compromissoEditado),
        error: (erro) => this.processarFalha(erro)
      });
  }

  private processarSucesso(compromisso: FormsCompromissoViewModel) {
    this.router.navigate(['/compromissos/listar']);
  }

  private processarFalha(erro: any) {
    console.log(erro);
  }

  public limparCamposLinkELocal(): void {
    this.formCompromisso.controls['link'].reset();
    this.formCompromisso.controls['local'].reset();
  }
}
