export class Product {
  id: number;
  code: string;
  name: string;
  price: number;

  //
  constructor(code: string, name: string, price: number) {
    this.code = code;
    this.name = name;
    this.price = price;
  }
}
