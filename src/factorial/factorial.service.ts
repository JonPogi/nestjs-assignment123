import { Injectable } from '@nestjs/common';

@Injectable()
export class FactorialService {
  calculateFactorial(n: number): number {
    if (n < 0) {
      throw new Error('Number must be a non-negative integer');
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
