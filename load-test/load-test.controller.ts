import { Controller, Get } from '@nestjs/common';

@Controller('api/load-test')
export class LoadTestController {
  @Get()
  handleLoadTest(): string {
    // Simula una pequeña operación matemática
    const result = Array.from({ length: 1000 }, (_, i) => i).reduce((a, b) => a + b, 0);
    return `Load test result: ${result}`;
  }
}
