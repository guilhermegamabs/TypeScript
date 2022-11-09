enum Colors {
  RED = 10, // 10
  BLUE = 21, // 21
  YELLOW = 32, // 32
}

enum Colors {
  GREEN = 'GREEN',
  ORANGE = 222,
  PINK,
}

export function chooseColor(cor: Colors): void {
  console.log(Colors[cor]);
}

chooseColor(Colors.PINK);

console.log(Colors);
// console.log(Colors.RED);
// console.log(Colors[10]);
// console.log(Colors.GREEN);
