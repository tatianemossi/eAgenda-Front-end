import { FormaPagamentoDespesaEnum } from "./formaPagamentoDespesaEnum";

export class ListarDespesaViewModel {
  id: string;
  descricao: string;
  valor: number;
  data: Date;
  formaPagamento: FormaPagamentoDespesaEnum;
}
