import { Module } from '@nestjs/common';
import { ResoursesService } from './resourses.service';
import { ResoursesController } from './resourses.controller';

@Module({
  controllers: [ResoursesController],
  providers: [ResoursesService],
})
export class ResoursesModule {}
