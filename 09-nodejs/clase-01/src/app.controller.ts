import { Controller, Get, Header, HttpCode, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('http://nodejs.com', 301)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @HttpCode(202)
  @Header('Cache-Control', 'no-store')
  postHello(): string {
    return this.appService.postHello();
  }

  @Get('ejemplo')
  @Redirect('https://nodejs.com', 301)
  getRedirect() { }

  @Get('list')
  getList(): any[] {
    return this.appService.getList();
  }
  
  @Get('async')
  async buscarTodos(): Promise<any> {
    return [1, 2, 3]
  }
}
