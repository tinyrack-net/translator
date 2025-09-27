import { TranslateService } from './core';

export function GoogleTranslateService(): TranslateService {
  return {
    translate: async (text: string, targetLanguage: string) => {
      return '';
    },
  };
}
