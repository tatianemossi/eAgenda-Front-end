import { FormsCategoriaViewModel } from "src/app/categorias/view-models/forms-categoria.view-model";
import { ListarCategoriaViewModel } from "src/app/categorias/view-models/listar-categoria.view-model";
import { VisualizarCategoriaViewModel } from "src/app/categorias/view-models/visualizar-categoria.view-model";
import { FormaPagamentoDespesaEnum } from "./formaPagamentoDespesaEnum";

export class FormsDespesaViewModel {
  id: string;
  descricao: string;
  valor: number;
  data: Date;
  formaPagamento: FormaPagamentoDespesaEnum;

  categoriasSelecionadas: ListarCategoriaViewModel[];
  categoriasId: FormsCategoriaViewModel[];
}
