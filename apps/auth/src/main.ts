import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // Opcional: elimina propiedades no decoradas en los DTOs
      forbidNonWhitelisted: true, // Opcional: lanza un error si hay propiedades no decoradas
    }),
  );
  await app.listen(3105);
}
bootstrap();
