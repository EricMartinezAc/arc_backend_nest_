import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResoursesService } from './resourses.service';
import { CreateResourseDto } from './dto/create-resourse.dto';
import { UpdateResourseDto } from './dto/update-resourse.dto';

@Controller('resourses')
export class ResoursesController {
  constructor(private readonly resoursesService: ResoursesService) {}

  @Post()
  create(@Body() createResourseDto: CreateResourseDto) {
    return this.resoursesService.create(createResourseDto);
  }

  @Get()
  findAll() {
    return this.resoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resoursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourseDto: UpdateResourseDto) {
    return this.resoursesService.update(+id, updateResourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resoursesService.remove(+id);
  }
}
