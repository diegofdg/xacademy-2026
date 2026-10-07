import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GET Hello World!';
  }

  getList():any[] {
    return [
      'hola',
      'mundo',
      2026
    ]
  }

  postHello(): string {
    return 'POST Hello World!'
  }
}
