import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDTO } from '../../common';
import { ResponseArcontrollerApiNestDto } from 'src/dto/response-arcontroller_api_nest.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): ResponseArcontrollerApiNestDto {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(
    @Query() PaginationDTO: PaginationDTO,
  ): ResponseArcontrollerApiNestDto {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ResponseArcontrollerApiNestDto {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): ResponseArcontrollerApiNestDto {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): ResponseArcontrollerApiNestDto {
    return this.usersService.remove(+id);
  }
}
