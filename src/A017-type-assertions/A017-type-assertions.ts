// Recomendado
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion Recomendado quando tem certeza
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Anything';
input.focus();

// Não recomendado

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

const body4 = document.querySelector('body') as unknown as number;
