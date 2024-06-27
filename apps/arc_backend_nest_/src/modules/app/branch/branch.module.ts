import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchService } from './branch.service';
import { BranchResolver } from './branch.resolver';
import { Branch } from './entity/branch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Branch])],
  providers: [BranchService, BranchResolver],
})
export class BranchModule {}
