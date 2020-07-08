import { Pessoa } from './pessoa';
import { Sintoma } from './sintoma';
import { PeriodoSistema } from './periodoSistema';

export class Questionario {

  constructor(
    public id: number,
    public sintoma: Sintoma,
    public periodoSistema: PeriodoSistema,
    public pessoa: Pessoa,
    public dataQuestionario: Date
  ) { }

}
