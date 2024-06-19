import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImService } from './im.service';
import { CreateImDto } from './dto/create-im.dto';
import { UpdateImDto } from './dto/update-im.dto';

@Controller('im')
export class ImController {
  constructor(private readonly imService: ImService) {}

  @Post()
  create(@Body() createImDto: CreateImDto) {
    return this.imService.create(createImDto);
  }

  @Get()
  findAll() {
    return this.imService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImDto: UpdateImDto) {
    return this.imService.update(+id, updateImDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imService.remove(+id);
  }
}
