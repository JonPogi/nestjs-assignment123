import { Controller, Get, Query } from '@nestjs/common';
import { FactorialService } from './factorial.service';

@Controller('factorial')
export class FactorialController {
  constructor(private readonly factorialService: FactorialService) {}

  @Get()
  calculateFactorial(@Query('n') n: string) {
    const num = parseInt(n, 10);
    if (isNaN(num) || num < 0) {
      return { error: 'Please provide a non-negative integer for n' };
    }
    const result = this.factorialService.calculateFactorial(num);
    return { number: num, factorial: result };
  }
}
