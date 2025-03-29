import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getStatus() {
    return { message: 'API NestJS está rodando 🚀' };
  }
}
