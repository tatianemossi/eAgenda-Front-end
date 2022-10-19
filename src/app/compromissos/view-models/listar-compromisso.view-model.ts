import { Time } from "@angular/common";

export class ListarCompromissoViewModel {
  id: string;
  assunto: string;
  data: Date;
  horaInicio: Time;
  horaTermino: Time;
  nomeContato: string;
}
