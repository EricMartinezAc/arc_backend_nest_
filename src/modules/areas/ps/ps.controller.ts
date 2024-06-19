import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsService } from './ps.service';
import { CreatePDto } from './dto/create-p.dto';
import { UpdatePDto } from './dto/update-p.dto';

@Controller('ps')
export class PsController {
  constructor(private readonly psService: PsService) {}

  @Post()
  create(@Body() createPDto: CreatePDto) {
    return this.psService.create(createPDto);
  }

  @Get()
  findAll() {
    return this.psService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePDto: UpdatePDto) {
    return this.psService.update(+id, updatePDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psService.remove(+id);
  }
}
