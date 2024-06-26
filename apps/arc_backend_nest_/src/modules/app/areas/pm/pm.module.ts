import { Module } from '@nestjs/common';
import { PmService } from './pm.service';
import { PmController } from './pm.controller';

@Module({
  controllers: [PmController],
  providers: [PmService],
})
export class PmModule {}
