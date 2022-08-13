import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Product } from "./product-model";

@Controller("products")
export class ProductsController {
  products: Product[] = [
    new Product("LIV01", "Livro de Python", 29.9),
    new Product("LIV02", "Livro de C++", 29.9),
    new Product("LIV03", "Livro de JavaScript", 29.9),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(":id")
  getOne(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  createOne(@Body() product): Product {
    const newProduct = new Product(product.code, product.name, product.price);

    this.products.push(newProduct);

    return newProduct;
  }

  @Put()
  updateOne(@Body() product: Product): Product {
    return product;
  }

  @Delete()
  deleteOne(): string {
    this.products.pop();

    return `Produto apagado`;
  }
}
