export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

// funcao('Gui');
funcao.call(new Date(), 'Gui', 30);
funcao.apply(new Date(), ['Gui', 30]);
