import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmService } from './sm.service';
import { CreateSmDto } from './dto/create-sm.dto';
import { UpdateSmDto } from './dto/update-sm.dto';

@Controller('sm')
export class SmController {
  constructor(private readonly smService: SmService) {}

  @Post()
  create(@Body() createSmDto: CreateSmDto) {
    return this.smService.create(createSmDto);
  }

  @Get()
  findAll() {
    return this.smService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmDto: UpdateSmDto) {
    return this.smService.update(+id, updateSmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smService.remove(+id);
  }
}
