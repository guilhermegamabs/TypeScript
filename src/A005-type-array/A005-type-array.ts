// Array<T> - T[]

export function mulArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

export function concatenateStrings(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = mulArgs(1, 2, 3);
const concatenation = concatenateStrings('Guilherme ', 'Gama');
const upper = toUpperCase('Guilherme ', 'Gama');

console.log(result);
console.log(concatenation);
console.log(upper);
