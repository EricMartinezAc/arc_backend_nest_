import { Module } from '@nestjs/common';
import { SmService } from './sm.service';
import { SmController } from './sm.controller';

@Module({
  controllers: [SmController],
  providers: [SmService],
})
export class SmModule {}
