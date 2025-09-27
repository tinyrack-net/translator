import { GoogleTranslateService } from './google';

export const TranslateServices = {
  google: GoogleTranslateService(),
} as const;
