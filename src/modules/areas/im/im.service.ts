import { Injectable } from '@nestjs/common';
import { CreateImDto } from './dto/create-im.dto';
import { UpdateImDto } from './dto/update-im.dto';

@Injectable()
export class ImService {
  create(createImDto: CreateImDto) {
    return 'This action adds a new im';
  }

  findAll() {
    return `This action returns all im`;
  }

  findOne(id: number) {
    return `This action returns a #${id} im`;
  }

  update(id: number, updateImDto: UpdateImDto) {
    return `This action updates a #${id} im`;
  }

  remove(id: number) {
    return `This action removes a #${id} im`;
  }
}
