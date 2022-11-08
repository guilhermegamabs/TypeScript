const dataClient1: readonly [number, string] = [1, 'Guilherme'];
const dataClient2: [number, string, string] = [1, 'Guilherme', 'Gama'];
const dataClient3: [number, string, string?] = [1, 'Guilherme'];
const dataClient4: [number, string, ...string[]] = [1, 'Guilherme', 'Gama'];

//dataClient1[0] = 2000;
//dataClient1[1] = 'Pedro';
// agr é imutável por causa do readonly dataClient1.pop();

console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);

const array1: readonly string[] = ['Guilherme', 'Gama'];
const array2: ReadonlyArray<string> = ['Guilherme', 'Gama'];

console.log(array1);
console.log(array2);
