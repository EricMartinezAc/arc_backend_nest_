import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './modules/app/areas/areas.module';
import { ProductsModule } from './modules/auth/products/products.module';
import { ResoursesModule } from './modules/app/resourses/resourses.module';
import { BranchesModule } from './modules/app/branches/branches.module';

@Module({
  imports: [AreasModule, ProductsModule, ResoursesModule, BranchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
