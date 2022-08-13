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
import { ProductServices } from "./product-services";

@Controller("products")
export class ProductsController {
  constructor(private productService: ProductServices) {}

  @Get()
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get(":id")
  getOne(@Param() params): Product {
    return this.productService.getOne(params.id);
  }

  @Post()
  createOne(@Body() product): Product {
    const newProduct = new Product(product.code, product.name, product.price);

    return this.productService.createOne(newProduct);
  }

  @Put()
  updateOne(@Body() product: Product): Product {
    return product;
  }

  @Delete()
  deleteOne(): string {
    return this.productService.deleteOne();
  }
}
