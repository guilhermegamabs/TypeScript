type MyType = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayNumbers);

async function promisesAsync() {
  return 1;
}

function otherPromise(): Promise<MyType> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promisesAsync().then((resultado) => console.log(resultado + 1));
otherPromise().then((resultado) => console.log(resultado + 1));
