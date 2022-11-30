function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('I am the decorator and I received', target);
  return class extends target {
    cor: string;
    nome: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = this.inverte(args[1]);
      this.nome = this.inverte(args[0]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}
// Decorator Class
@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('I am the class');
  }
}

const animal = new Animal('Gui', 'roxo');
console.log(animal);
