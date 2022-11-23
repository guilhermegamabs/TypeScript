export class Calculadora {
  constructor(public num: number) {}
  add(n: number): this {
    this.num += n;
    return this;
  }

  sub(n: number): this {
    this.num -= n;
    return this;
  }

  mul(n: number): this {
    this.num *= n;
    return this;
  }

  div(n: number): this {
    this.num /= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.num **= n;
    return this;
  }
}
const calculadora = new Calculadora(10);
const subcalculadora = new SubCalculadora(10);

calculadora.add(2).mul(4).div(2).sub(14);
subcalculadora.add(2).mul(4).div(2).sub(14).pow(2);

console.log(calculadora);
console.log(subcalculadora);

// Builder - GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    // n vamos fazer, só que é legal fazer um type guard
    console.log(`Enviando dados via ${this.method} para ${this.method}`);
  }
}

const request = new RequestBuilder(); // Builder

request.setUrl('http://www.youtube.com').setMethod('post').send();
console.log(request);
