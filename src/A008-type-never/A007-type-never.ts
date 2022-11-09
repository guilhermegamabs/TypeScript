// never normalmente usado é um laçe infinito
// erro

export function createError(): never {
  throw new Error('Erro qualquer');
}

createError();
