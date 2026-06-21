import { Controller, Get, Query, Request } from '@nestjs/common';

@Controller('api')
export class SearchController {
  @Get('search')
  search(@Query('q') query: string): string {
    return `Search query: ${query} `;
  }
}
