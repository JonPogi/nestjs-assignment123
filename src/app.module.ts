import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { FactorialModule } from './factorial/factorial.module';

@Module({
  imports: [FactorialModule],
=======
<<<<<<< HEAD
import { PrimeNumberModule } from './prime-number/prime-number.module';

@Module({
  imports: [PrimeNumberModule],
=======
import { FibonacciModule } from './fibonacci/fibonacci.module';

@Module({
  imports: [FibonacciModule],
>>>>>>> d58ebc7954963ee4dc52ec3e230a19731c87bbf1
>>>>>>> 133de10b294581e832eb6a74d18d9d7e56c8ac18
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
