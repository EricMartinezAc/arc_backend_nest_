import { PartialType } from '@nestjs/mapped-types';
import { CreateImDto } from './create-im.dto';

export class UpdateImDto extends PartialType(CreateImDto) {}
