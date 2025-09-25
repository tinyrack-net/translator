import { defineProxyService } from '@webext-core/proxy-service';

console.log('math service loaded');

const db: number[] = [];

// 1. Define your service
class MathService {
  async fibonacci(number: number): Promise<number> {
    return 5;
  }

  async add(n: number): Promise<void> {
    db.push(n);
    console.log(db);
  }
}

export const [registerMathService, getMathService] = defineProxyService(
  'MathService',
  () => new MathService(),
);
