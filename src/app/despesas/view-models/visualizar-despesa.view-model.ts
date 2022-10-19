import { VisualizarCategoriaViewModel } from "src/app/categorias/view-models/visualizar-categoria.view-model";
import { FormaPagamentoDespesaEnum } from "./formaPagamentoDespesaEnum";

export class VisualizarDespesaViewModel {
  id: string;
  descricao: string;
  valor: number;
  data: Date;
  formaPagamento: FormaPagamentoDespesaEnum;

  categoria: VisualizarCategoriaViewModel;
}
