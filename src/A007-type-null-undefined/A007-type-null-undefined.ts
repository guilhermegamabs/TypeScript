let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  // abertura da função
  firstName: string,
  lastName?: string,
): {
  // type annotation
  firstName: string;
  lastName?: string;
} {
  // corpo da função
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Invalid account');
} else {
  console.log(squareOfTwoString * 20);
}

console.log(squareOfTwoNumber);
console.log(squareOfTwoString);
