import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmService } from './pm.service';
import { CreatePmDto } from './dto/create-pm.dto';
import { UpdatePmDto } from './dto/update-pm.dto';

@Controller('pm')
export class PmController {
  constructor(private readonly pmService: PmService) {}

  @Post()
  create(@Body() createPmDto: CreatePmDto) {
    return this.pmService.create(createPmDto);
  }

  @Get()
  findAll() {
    return this.pmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmDto: UpdatePmDto) {
    return this.pmService.update(+id, updatePmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmService.remove(+id);
  }
}
