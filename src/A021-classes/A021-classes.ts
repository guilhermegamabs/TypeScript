// Forma longa
export class Empresa {
  readonly nome: string; // PUBLIC
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// Forma curta
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Dunder Mifflin', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Guilherme', 'Gama');
const colaborador2 = new Colaborador('Luiz', 'Otávio');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador({
  nome: 'Carlos',
  sobrenome: 'Miranda',
});
empresa1.mostrarColaboradores();
