import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScmService } from './scm.service';
import { CreateScmDto } from './dto/create-scm.dto';
import { UpdateScmDto } from './dto/update-scm.dto';

@Controller('scm')
export class ScmController {
  constructor(private readonly scmService: ScmService) {}

  @Post()
  create(@Body() createScmDto: CreateScmDto) {
    return this.scmService.create(createScmDto);
  }

  @Get()
  findAll() {
    return this.scmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScmDto: UpdateScmDto) {
    return this.scmService.update(+id, updateScmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scmService.remove(+id);
  }
}
