import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBranchInput {
  @Field()
  name: string;

  @Field()
  location: string;
}
