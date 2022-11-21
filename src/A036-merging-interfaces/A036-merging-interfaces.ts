// Declaration merging em interfaces

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa1: Pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Gama',
  enderecos: ['Av.Santo Amaro'],
  idade: 18,
};

console.log(pessoa1);
