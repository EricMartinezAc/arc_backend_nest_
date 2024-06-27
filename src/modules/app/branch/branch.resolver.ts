import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BranchService } from './branch.service';
import { Branch } from './entity/branch.entity';
import { CreateBranchInput } from './dto/create-branch.input';

@Resolver(() => Branch)
export class BranchResolver {
  constructor(private readonly branchService: BranchService) {}

  @Query(() => String)
  Greats(): string {
    return 'Hello wordl';
  }

  @Query(() => [Branch])
  branches() {
    return this.branchService.findAll();
  }

  @Query(() => Branch)
  branch(@Args('id', { type: () => Int }) id: number) {
    return this.branchService.findOne(id);
  }

  @Mutation(() => Branch)
  createBranch(
    @Args('createBranchInput') createBranchInput: CreateBranchInput,
  ) {
    const { name, location } = createBranchInput;
    return this.branchService.createBranch(name, location);
  }
}
