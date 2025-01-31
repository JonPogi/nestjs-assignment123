import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeNumberModule } from './prime-number/prime-number.module';

@Module({
  imports: [PrimeNumberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
