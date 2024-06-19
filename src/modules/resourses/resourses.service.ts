import { Injectable } from '@nestjs/common';
import { CreateResourseDto } from './dto/create-resourse.dto';
import { UpdateResourseDto } from './dto/update-resourse.dto';

@Injectable()
export class ResoursesService {
  create(createResourseDto: CreateResourseDto) {
    return 'This action adds a new resourse';
  }

  findAll() {
    return `This action returns all resourses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourse`;
  }

  update(id: number, updateResourseDto: UpdateResourseDto) {
    return `This action updates a #${id} resourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourse`;
  }
}
