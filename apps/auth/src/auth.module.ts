import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { PersonModule } from './modules/person/person.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ProductsModule, PersonModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AuthModule {}
