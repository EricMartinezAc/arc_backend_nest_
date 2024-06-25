import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entity/branch.entity';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private branchesRepository: Repository<Branch>,
  ) {}

  findAll(): Promise<Branch[]> {
    return this.branchesRepository.find();
  }

  findOne(id: number): Promise<Branch> {
    return this.branchesRepository.findOneBy({ id });
  }

  createBranch(name: string, location: string): Promise<Branch> {
    const branch = this.branchesRepository.create({ name, location });
    return this.branchesRepository.save(branch);
  }
}
