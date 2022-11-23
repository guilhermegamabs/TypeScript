//Encadeamento opcional e Operador de coalescência nula
// Isso é do JS
// não valor : null ou undefined
type Documento = {
  title: string;
  text: string;
  date?: Date;
};

const documento: Documento = {
  title: 'Espada do Destino',
  text: 'Livro sobre um Bruxo',
  // date: new Date(),
};

//Encadeamento opcional(?)
// Coaslescência nula não aceita null e undefined, com isso, ele vai executar
// o que está na direita
console.log(documento.date?.toDateString() ?? 'Do not exist date');
console.log(undefined ?? 'I do not aceept null or undefined');
console.log(false ?? 'Something wrong happenned, I accept boolean');
