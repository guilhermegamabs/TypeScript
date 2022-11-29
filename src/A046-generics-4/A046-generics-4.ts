type ObterChave = <O, K extends keyof O>(obj: O, chave: K) => O[K];

const obterChave: ObterChave = (obj, chave) => obj[chave];

const animal = {
  cor: 'Amarelo',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
