function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Gama',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Guilherme', 'Gama');
pessoa.exibirNome();
export { pessoa };
