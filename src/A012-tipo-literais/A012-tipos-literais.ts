let x = 10; // eslint-disable-line
x = 0b1010;
// x = 'Gui';
// tipo y sempre será 10, isso é um tipo literal
const y = 10;
let a = 100 as const ; // eslint-disable-line
// a = 101;

const person = {
  name: 'Guilherme' as const,
  lastName: 'Gama',
};

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(chooseColor('Yellow'));

//person.name = 'Carlos';

export default 1;
