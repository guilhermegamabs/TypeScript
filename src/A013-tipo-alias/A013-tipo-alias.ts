// Type Alias
type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favColor?: string;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Black' | 'Yellow';
type FavColor = ColorRGB | ColorCMYK;

// Códigoo utilizando os tipos
const person: Person = {
  age: 18,
  name: 'Guilherme',
  salary: 100_000, // 200000
};

export function setFavColor(person: Person, color: FavColor): Person {
  return { ...person, favColor: color };
}

console.log(setFavColor(person, 'Blue'));
