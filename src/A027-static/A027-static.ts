export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Guilherme', 'Gama', 18, '123.456.789-11');
const pessoa2 = Pessoa.criaPessoa('Julia', 'Gama');

// quando usa o = tá chamando o set
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
