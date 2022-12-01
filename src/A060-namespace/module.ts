/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNameSpace {
  export const nameSpaceName = 'Guilherme';

  export class NameSpacePerson {
    constructor(public name: string) {}
  }

  const person = new NameSpacePerson('Guilherme');

  export namespace AnotherNameSpace {
    export const nameSpaceName = 'Guilherme In AnotherNameSpace';
  }
}

const constOfNameSpace = 'Value of the const of NameSpace';
console.log(constOfNameSpace);
