import { PartialType } from '@nestjs/mapped-types';
import { CreateResourseDto } from './create-resourse.dto';

export class UpdateResourseDto extends PartialType(CreateResourseDto) {}
