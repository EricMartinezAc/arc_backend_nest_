import { PartialType } from '@nestjs/mapped-types';
import { CreatePmDto } from './create-pm.dto';

export class UpdatePmDto extends PartialType(CreatePmDto) {}
