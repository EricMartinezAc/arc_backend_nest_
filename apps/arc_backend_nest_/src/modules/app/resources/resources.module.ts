import { Module } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { ResourcesResolver } from './resources.resolver';

@Module({
  controllers: [],
  providers: [ResourcesService, ResourcesResolver],
})
export class ResourcesModule {}
