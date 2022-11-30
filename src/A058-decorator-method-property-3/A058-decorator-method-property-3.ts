function decorator(classPropertype: any, name: string | symbol): any {
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

export class OnePerson {
  @decorator
  name: string;
  @decorator
  lastName: string;
  age: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.name = nome;
    this.lastName = sobrenome;
    this.age = idade;
  }

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
const method = person.method('Hello World');
console.log(method);
