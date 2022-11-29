// tipo do obj da chave e do valor
// Record
const obj1: Record<string, string | number> = {
  nome: 'Guilherme',
  sobrenome: 'Gama',
  idade: 30,
};

// console.log(obj1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required vira tudo Obrigatório
type PessoaRequired = Required<PessoaProtocol>;
// Partial Vira tudo Opcional
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadyOnly = Readonly<PessoaRequired>;
// Pick escolha as coisas do objeto que deseja utilizar
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const obj2: PessoaRequired = {
  nome: 'Guilherme',
  sobrenome: 'Gama',
  idade: 18,
};

// console.log(obj2);

const obj3: PessoaPartial = {
  nome: 'Guilherme',
  sobrenome: 'Gama',
  // idade: 18,
};

console.log(obj3);

/*
const obj4: PessoaReadyOnly = {
  nome: 'Guilherme',
  sobrenome: 'Gama',
  // idade: 18,
};

console.log(obj4);
*/

const obj5: PessoaPick = {
  nome: 'Guilherme',
  sobrenome: 'Gama',
  // idade: 18,
};

//console.log(obj5);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'ajhdjsjhfsg3sdsfsgf',
  nome: 'Guilherme',
  idade: 18,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API');
console.log(accountApi);
// Module Mode
export default 1;
