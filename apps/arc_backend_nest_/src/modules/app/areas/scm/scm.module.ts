import { Module } from '@nestjs/common';
import { ScmService } from './scm.service';
import { ScmController } from './scm.controller';

@Module({
  controllers: [ScmController],
  providers: [ScmService],
})
export class ScmModule {}
