import { VisualizarContatoViewModel } from "src/app/contatos/view-models/visualizar-contato.view-model";
import { TipoLocalCompromissoEnum } from "./tipoLocalCompromissoEnum";

export class FormsCompromissoViewModel {
  id: string;
  assunto: string;
  tipoLocal: TipoLocalCompromissoEnum;
  link?: string;
  local?: string;
  data: Date;
  horaInicio: Date;
  horaTermino: Date;

  contatoId: VisualizarContatoViewModel;
}
