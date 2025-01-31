import { Controller, Get, Query } from '@nestjs/common';
import { PrimeNumberService } from './prime-number.service';

@Controller('prime-number')
export class PrimeNumberController {
  constructor(private readonly primeNumberService: PrimeNumberService) {}

  @Get()
  checkPrime(@Query('n') n: string) {
    const num = parseInt(n, 10);
    if (isNaN(num) || num <= 0) {
      return { error: 'Please provide a positive integer for n' };
    }
    const isPrime = this.primeNumberService.checkPrimeNumber(num);
    return { number: num, isPrime };
  }
}
