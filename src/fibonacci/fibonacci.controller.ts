import { Controller, Get, Query } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';

@Controller('fibonacci')
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  @Get()
  getFibonacci(@Query('n') n: string) {
    const num = parseInt(n, 10);
    if (isNaN(num) || num <= 0) {
      return { error: 'Please provide a positive integer for n' };
    }
    return { sequence: this.fibonacciService.getFibonacci(num) };
  }
}
