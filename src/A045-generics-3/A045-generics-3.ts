interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastName: T;
  age: U;
};

const student1: PersonProtocol = {
  name: 'Guilherme',
  lastName: 'Gama',
  age: 18,
};

const student2: PersonProtocol2 = {
  name: 'Guilherme',
  lastName: 'Bitencourt',
  age: 18,
};

console.log(student1);
console.log(student2);
