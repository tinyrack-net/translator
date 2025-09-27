export type TranslateService = {
  translate: (text: string, targetLanguage: string) => Promise<string>;
};
