import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './modules/areas/areas.module';
import { ProductsModule } from './modules/products/products.module';
import { ResoursesModule } from './modules/resourses/resourses.module';
@Module({
  imports: [
    AreasModule, 
    ProductsModule, 
    ResoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
