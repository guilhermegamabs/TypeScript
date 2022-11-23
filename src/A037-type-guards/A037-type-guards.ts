export function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 2));

type Pessoa = {
  tipo: 'pessoa';
  nome: string;
};

type Animal = {
  tipo: 'animal';
  cor: string;
};

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: Pessoa | Animal): void {
  //mesma coisa: if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log(obj.tipo);
      return;
  }
}

mostraNome(new Aluno('Guilherme'));
