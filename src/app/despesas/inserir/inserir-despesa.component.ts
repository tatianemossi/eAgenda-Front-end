import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/categorias/services/categoria.service';
import { ListarCategoriaViewModel } from 'src/app/categorias/view-models/listar-categoria.view-model';
import { DespesaService } from '../services/despesa.service';
import { FormaPagamentoDespesaEnum } from '../view-models/formaPagamentoDespesaEnum';
import { FormsDespesaViewModel } from '../view-models/forms-despesa.view-model';

@Component({
  selector: 'app-inserir-despesa',
  templateUrl: './inserir-despesa.component.html',
  styles: [
  ]
})
export class InserirDespesaComponent implements OnInit {
  public formDespesa: FormGroup;
  public formasPagamento = Object.values(FormaPagamentoDespesaEnum)
    .filter(v => !Number.isFinite(v));

  public categorias$: Observable<ListarCategoriaViewModel[]>;

  public despesaFormVM: FormsDespesaViewModel = new FormsDespesaViewModel();

  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private despesaService: DespesaService,
    private categoriaService: CategoriaService,
    private router: Router) {

    titulo.setTitle('Cadastrar Despesa - eAgenda');
  }

  ngOnInit(): void {
    this.formDespesa = this.formBuilder.group({
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', [Validators.required]],
      data: ['', Validators.required],
      formaPagamento: ['', Validators.required],
      categoria: [''],
      categoriaId: ['', Validators.required],
    });

    this.categorias$ = this.categoriaService.selecionarTodos();
  }

  get descricao() {
    return this.formDespesa.get('descricao');
  }

  get valor() {
    return this.formDespesa.get('valor');
  }

  get data() {
    return this.formDespesa.get('data');
  }

  get formaPagamento() {
    return this.formDespesa.get('formaPagamento');
  }

  get categoriaId() {
    return this.formDespesa.get('categoriaId');
  }

  public gravar() {
    if (this.formDespesa.invalid) return;

    this.despesaFormVM = Object.assign({}, this.despesaFormVM, this.formDespesa.value);

    this.despesaService.inserir(this.despesaFormVM)
      .subscribe({
        next: (despesaInserida) => this.processarSucesso(despesaInserida),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(despesa: FormsDespesaViewModel): void {
    this.router.navigate(['/despesas/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.error(erro);
    }
  }
}
