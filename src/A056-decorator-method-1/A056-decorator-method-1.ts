function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    // writable: false,
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class OnePerson {
  name: string;
  lastName: string;
  age: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.name = nome;
    this.lastName = sobrenome;
    this.age = idade;
  }

  @decorator
  method(msg: string): string {
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
const method = person.method('Hellor World');
console.log(method);
