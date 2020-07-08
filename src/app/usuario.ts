import { Pessoa } from './pessoa';

export class Usuario {

  constructor(
    public id: number,
    public username: string,
    public email: string,
    public password: string,
    public dataCadastro: Date,
    public pessoa: Pessoa
  ) {  }

}
