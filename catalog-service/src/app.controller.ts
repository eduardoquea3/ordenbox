import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  health(): { service: string; status: string } {
    return { service: 'catalog-service', status: 'ok' };
  }
}
