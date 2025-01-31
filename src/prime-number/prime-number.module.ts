import { Module } from '@nestjs/common';
import { PrimeNumberService } from './prime-number.service';
import { PrimeNumberController } from './prime-number.controller';

@Module({
  providers: [PrimeNumberService],
  controllers: [PrimeNumberController]
})
export class PrimeNumberModule {}
