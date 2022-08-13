export class ProductModel {
  id: number;
  code: string;
  name: string;
  price: number;

  // code: string, name: string, price: string
  constructor(props: Omit<ProductModel, "id">) {
    Object.assign(this, props);
  }
}
