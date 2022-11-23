type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Hyundai',
  year: '2011',
  name: 'HB20',
};

console.log(carro);
