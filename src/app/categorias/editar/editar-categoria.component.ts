import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';
import { FormsCategoriaViewModel } from '../view-models/forms-categoria.view-model';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styles: [
  ]
})
export class EditarCategoriaComponent implements OnInit {
  public formCategoria: FormGroup;

  public categoriaFormVM: FormsCategoriaViewModel = new FormsCategoriaViewModel();

  constructor(
    titulo: Title,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService
  ) {
    titulo.setTitle('Editar Categoria - eAgenda');
  }

  ngOnInit(): void {
    this.categoriaFormVM = this.route.snapshot.data['categoria'];

    this.formCategoria = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.formCategoria.patchValue({
      id: this.categoriaFormVM.id,
      titulo: this.categoriaFormVM.titulo
    });
  }

  get titulo() {
    return this.formCategoria.get('titulo');
  }

  public gravar() {
    if (this.formCategoria.invalid) return;

    this.categoriaFormVM = Object.assign({}, this.categoriaFormVM, this.formCategoria.value);

    this.categoriaService.editar(this.categoriaFormVM)
      .subscribe({
        next: (categoriaEditada) => this.processarSucesso(categoriaEditada),
        error: (erro) => this.processarFalha(erro)
      });
  }

  private processarSucesso(categoria: FormsCategoriaViewModel) {
    this.router.navigate(['/categorias/listar']);
  }

  private processarFalha(erro: any) {
    console.log(erro);
  }
}
