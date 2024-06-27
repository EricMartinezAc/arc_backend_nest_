import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseArcontrollerApiNestDto } from '../../dto/response-arcontroller_api_nest.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto): ResponseArcontrollerApiNestDto {
    return {
      sta: 200,
      res: {},
      msj: 'holaP',
    };
  }

  findAll(): ResponseArcontrollerApiNestDto {
    return {
      sta: 200,
      res: {},
      msj: 'holaP',
    };
  }

  findOne(id: number): ResponseArcontrollerApiNestDto {
    return {
      sta: 200,
      res: {},
      msj: 'holaP',
    };
  }

  update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): ResponseArcontrollerApiNestDto {
    return {
      sta: 200,
      res: {},
      msj: 'holaP',
    };
  }

  remove(id: number): ResponseArcontrollerApiNestDto {
    return {
      sta: 200,
      res: {},
      msj: 'holaP',
    };
  }
}
