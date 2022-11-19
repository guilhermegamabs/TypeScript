// Forma longa

export class Empresa {
  readonly nome: string; // PUBLIC
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class DunderMifflin extends Empresa {
  constructor() {
    super('Dunder Mifflin', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

// Forma curta - aqui precisa usar o public
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new DunderMifflin();
const colaborador1 = new Colaborador('Guilherme', 'Gama');
const colaborador2 = new Colaborador('Luiz', 'Otávio');
const colaborador3 = new Colaborador('Carlos', 'Alberto');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
