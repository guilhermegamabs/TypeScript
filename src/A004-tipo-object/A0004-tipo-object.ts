const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

// objectA.keyA = 'Another Value';
objectA.keyC = 'New Value';
objectA.keyD = 'New Value';

console.log(objectA);
