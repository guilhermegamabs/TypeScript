export class Pessoa<T, U> {
  constructor(public nome: T, public idadde: U) {}
}

//const pessoa1 = new Pessoa('Guilherme', 18);

// estrutura de dados "pilha"

export class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  lengthArray(): number {
    return this.contador;
  }

  showStack(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}

const pilha = new Stack<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

pilha.showStack();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
