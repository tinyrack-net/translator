import { registerMathService } from '@/lib/math';

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  registerMathService();

  console.log('dd');
});
