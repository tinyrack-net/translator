import { registerMathService } from '@/lib/math';
import { registerPreferencesService } from '@/lib/preferences';

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
  registerMathService();
  registerPreferencesService();
  console.log('dd');
});
