import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { ScmModule } from './scm/scm.module';
import { PsModule } from './ps/ps.module';
import { SmModule } from './sm/sm.module';

@Module({
  controllers: [AreasController],
  providers: [AreasService],
  imports: [ScmModule, PsModule, SmModule],
})
export class AreasModule {}
