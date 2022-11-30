function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class OnePerson {
  name: string;
  lastName: string;
  age: number;

  constructor(
    @decorator nome: string,
    @decorator sobrenome: string,
    idade: number,
  ) {
    this.name = nome;
    this.lastName = sobrenome;
    this.age = idade;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get fullName(): string {
    return this.name + ' ' + this.lastName;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }
}

const person = new OnePerson('Guilherme', 'Gama', 18);
// person.method = () => 'HEYYY';
const method = person.method('Hello World');
console.log(method);
