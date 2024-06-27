import { join } from 'path';
import { Module } from '@nestjs/common';
import { AreasModule } from './modules/app/areas/areas.module';
import { ProductsModule } from './modules/auth/products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchModule } from './modules/app/branch/branch.module';
import { ResourcesModule } from './modules/app/resources/resources.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'admin',
      password: 'qwerty',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true, // Habilita GraphQL Playground en desarrollo
    }),
    AreasModule,
    ProductsModule,
    BranchModule,
    ResourcesModule,
  ],
})
export class AppModule {}
