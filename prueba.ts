import { plainToClass } from 'class-transformer';
import { CreateProductDto } from './apps/auth/src/modules/products/dto/create-product.dto';

const plainObject = {
  name: 'collo',
  psw: 'qwerty123',
  email: 'ciro.fret@gmail.com',
  credits: '10593',
};

const user = plainToClass(CreateProductDto, plainObject);
console.log('Transformed User:', user);
console.log('Type of credits:', user);
