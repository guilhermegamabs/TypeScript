// & - AND
type HasName = { name: string };
type HasLastName = { lastname: string };
type Age = { age: number };
type Person = HasName & HasLastName & Age;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;

const person: Person = {
  age: 18,
  name: 'Guilherme',
  lastname: 'Gama',
};

console.log(person);

export { person };
