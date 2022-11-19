export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    // não está sendo criados abaixo, somente sala
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' AAA';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Classe Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Guilherme', 'Gama', 18, '111.111.111-11', '0001');
const cliente = new Cliente('Guilherme', 'Gama', 18, '111.111.111-11');
const pessoa = new Pessoa('Guilherme', 'Gama', 18, '111.111.111-11');
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
console.log(aluno);
