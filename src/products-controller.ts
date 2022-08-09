import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller("products")
export class ProductsController {
  @Get()
  getAll(): string {
    return "All products";
  }

  @Get(":id")
  getOne(@Param() params): string {
    return `Product id: ${params.id}`;
  }

  @Post()
  createOne(@Body() product): string {
    console.log(product);
    return "Product created successfully.";
  }

  @Put(":id")
  updateOne(@Body() updatedProduct, @Param() params): string {
    return `Product updated successfully. ${updatedProduct.name}, ${updatedProduct.price}, ${params.id}`;
  }
}
