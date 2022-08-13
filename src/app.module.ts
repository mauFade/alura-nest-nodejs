import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductServices } from "./product-services";
import { ProductsController } from "./products-controller";

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductServices],
})
export class AppModule {}
