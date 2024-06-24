import { Injectable } from '@nestjs/common';
import { CreatePDto } from './dto/create-p.dto';
import { UpdatePDto } from './dto/update-p.dto';

@Injectable()
export class PsService {
  create(createPDto: CreatePDto) {
    return 'This action adds a new p';
  }

  findAll() {
    return `This action returns all ps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} p`;
  }

  update(id: number, updatePDto: UpdatePDto) {
    return `This action updates a #${id} p`;
  }

  remove(id: number) {
    return `This action removes a #${id} p`;
  }
}
