import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCpannel(): string {
    return 'CPannel here';
  }
}
