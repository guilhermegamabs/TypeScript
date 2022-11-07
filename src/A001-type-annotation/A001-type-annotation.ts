/* eslint-disable*/
// Tipos básicos (aqui ocorre inferência de tipos)
let namee: string = 'Luiz'; // Qualquer tipo de string "" '' ``
let age: number = 30; // 10, 1.52, -5.23, 0fx00d
let adult: boolean = true; // true false
let symbol: symbol = Symbol('qualquer-symbol') // symbol
// let big: bigint = 10n  bigint


// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
let arrayOfNumbers2: number[] = [1, 2, 3, 4, 5];
let arrayOfStrings: Array<string> = ['a', 'b' , 'c'];
let arrayOfStrings2: string[] = ['a', 'b' , 'c'];


// Objetos
// ? faz com que o parâmetro seja opcional
let pessoa: {name: string, idade: number, adult?: boolean} = {
  name: 'Gui',
  idade: 18,
  adult: true
};


// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
