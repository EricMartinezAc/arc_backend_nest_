import { PartialType } from '@nestjs/mapped-types';
import { CreateArcontrollerApiNestDto } from './create-arcontroller_api_nest.dto';

export class UpdateArcontrollerApiNestDto extends PartialType(CreateArcontrollerApiNestDto) {}
