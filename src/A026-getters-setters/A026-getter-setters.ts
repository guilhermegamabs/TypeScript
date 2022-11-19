export class Pessoa {
  constructor(
    private _nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  get nome(): string {
    return this._nome;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('Guilherme', 'Gama', 18, '123.456.789-11');
// quando usa o = tá chamando o set
pessoa.cpf = '234.456.789-11';
console.log(pessoa.cpf);
