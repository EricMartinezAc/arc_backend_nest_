import { Injectable } from '@nestjs/common';
import { ArcontrollerApiNest } from './entities/arcontroller_api_nest.entity';

@Injectable()
export class AppService {
  getCpannel(): string {
    return 'CPannel here';
  }
}
