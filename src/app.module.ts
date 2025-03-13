import { Module } from '@nestjs/common';
import { LoadTestController } from './load-test/load-test.controller';

@Module({
  imports: [],
  controllers: [LoadTestController],
  providers: [],
})
export class AppModule {}
