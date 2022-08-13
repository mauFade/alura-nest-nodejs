import "dotenv/config";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductServices } from "./product-services";
import { ProductsController } from "./products-controller";

import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./product-model";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: process.env.DATABASE_PASS,
      database: "products",
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductServices],
})
export class AppModule {}
