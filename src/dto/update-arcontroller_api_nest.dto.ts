import { PartialType } from '@nestjs/mapped-types';
import { ResponseArcontrollerApiNestDto } from './response-arcontroller_api_nest.dto';

export class UpdateArcontrollerApiNestDto extends PartialType(ResponseArcontrollerApiNestDto) {}
